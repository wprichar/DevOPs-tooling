# Workload - DevOps Tooling

###DevOPs continuous integration applied to Blue Messenger

The Bluemix Pipeline has been created and applied to the Architecture Center's application [Blue Messenger!](https://hub.jazz.net/project/cfsworkload/blue-messenger/overview).

## Introduction

This pipeline demonstrates a contious integration pipeline. When changes are pushed in **GIT** to the master branch, **linting**, **unit testing**, **deployment to a test environment**, **performance testing**, and **behavioral testing** is initiated and validated before a zero-downtime deployment to production.
Monitoring happens throughout the pipeline's cycle through Bluemix's slack intergration. The services **NewRelic**, **Google Analytics**, and **Monitoring and Analytics** are also used to give real time data on status of pipeline.

## Sign up for / Log into Bluemix and DevOps

Sign up for Bluemix at https://console.ng.bluemix.net and DevOps Services at https://hub.jazz.net.
When you sign up, you'll create IBM ID, create an alias, and register with Bluemix. 


## Deploy to Bluemix

First we will sign up for **Slack** and **SauceLabs** that will be integrated into our pipeline. Select the **Deploy to Bluemix** button below. In the deployment screen that comes up, you will see the intergration sections for **Slack** and **SAUCE LABS**. Select **Create an account** on both to retrieve you needed information for the fields requested. You will need to create a channel on your slack that will be used for contious status messages of your deployment pipeline.

 [![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/wprichar/DevOPs-tooling.git)
 

Once you fill in the needed fields click **DEPLOY**. This will start the deployment of **Blue Messenger** and the static services used with the application. 

 After the pipeline has been configured, you can monitor the deployment by doing the following steps

1. Select your newly created project in DevOps Services.
2. Go to **MY PROJECTS**
3. Select **BUILD & DEPLOY**
4. You can monitor the stages by selecting **View logs and history**.

## Retrieve Slack webhook
   
In our first stage of the pipeline we add the webhook url to give more detailed information on the changes commited in GIT. We need to reterieve the webhook and put it in the stage as an environment variable. 


1. Navigate to https://my.slack.com/services/new/incoming-webhook/ to add a new webhook
2. Enter the channel you specified during the Deploy to Bluemix process and click **Add Incoming WebHooks Integration** 
3. Copy the **Webhook URL** to clipboard
4. Return to your project in Bluemix DevOps Services and click **BUILD AND DEPLOY**. This will take you to your project's deployment pipeline.
5. In the first tile **Build Stage** click the gear icon to **configure**. Select **ENVIRONMENT PROPERTIES** tab and in the **Value** part of the **SLACK_WEBHOOK_PATH** paste your webhook from clipboard.
6. Click **SAVE**

## Retrive Blazemeter token 
 
 The pipeline uses **Blazemeter** for it's performance testing. We need to get the API Token from **Blazemeter**, by signing up for a free trial, and put it into our pipeline. 
 
 1. Navigate to https://blazemeter.com/ and select **START TESTING NOW**
 2. Fill in your information and you will be taking to a wizard.
 3. Click skip wizard and in your dashboard select the person icon drop down at top right
 4. Select **API Key**
 5. Copy **Your Current Key** to clipboard
 6. Return to your project's pipeline in Bluemix DevOps Services
 7. Click gear icon on the **Performance test with Blazemeter** to configure
 8. Select **ENVIORNMENT PROPERTIES** at top 
 9. For the **token** field paste your blazemeter **API KEY** into the value
 10. Click **SAVE**
 
You pipeline is now set up to use Taurus with Blazemeter to do performance testing.

## Sign up for Google Analytics and put API into the source code

Google Analytics has been intergrated into this version of Blue Messenger. To link your own google analytics to your Blue Messenger you will need to retrieve a **Tracking ID**. To get one visit - 

https://ga-dev-tools.appspot.com/account-explorer/

Once you have obtained a **Tracking ID** it needs to be put into the applications source code. 

1. Return to your project in Bluemix DevOps Services and click EDIT CODE at top right of the page.
2. In the public/index.html file, in the **script** block with the **GoogleAnalyticsObject** in it replace the **replace me** in the first **ga()** field with your **Tracking ID**

Do not commit and push to master yet. We will first make a noticeable change to the application to simulate a new version update and then commit to master, which will kick off our pipeline. 

## Make change to Application and Commit changes to master

Now we need to create a change to the source code and commit the changes to the master branch. Once we do this, it will kick off the pipeline and we can monitor each deployment stage from there.

1. Return to your project in Bluemix DevOps Services and click EDIT CODE at top right of the page.
2. Add the lines of code, found below, to the bottom of your /public/stylesheets/style.css in your web IDE. This change will make the corners of the buttons pointed and not curved.
```
 .btn-lg{
     border-radius: 0;
 }
```
3. Select **File** and then **Save**
4. Click the **Git** symbol on the left to bring up your **Git** dashboard
5. Give a commit message and select all files and press **Commit**
6. Push it to master

This change to the master branch will kick of our deployment pipeline. Monitor it in **BUILD AND DEPLOY**. Read below for descriptions about each step the application goes through to get to production.

## Monitor pipeline for continous deployment education

At this point in the guide we have started the pipeline and we will now review each stage and how it demonstrates DevOPs and contious integration. 

### Build Stage

In this stage we perform a
```
npm install
```

to install our needed dependencies and we send our a commit message to slack with webhooks. Check the channel your provided when setting up your webhooks to see the commit message. It will tell you the name of the last commit being pushed into the pipeline under the name **incoming-webhook**

### Linting + Unit test

Here we perform our syntax checking with jslint and csslint with the npm modules jshint and csslint. The test results are written to junit-xml which can be seen in the **Tests** tab of **View logs and history**

You can set up configuration for the jslint by editing the .jshintrc in root directly of your DevOPs services. For more examples see -
http://jshint.com/docs/

The mocha test done is a simple test that just creates a server and waits for callback that it was successfull. We will have behavioral driven tests in our testing environment.

### Push to test

This stage pushes the new version of BlueMessenger to a Cloud Foundry application with the test extension to be used for testing. A test cloudant database is also create at this stage to properly demonstrate an enterprise tool chain where the production database is not linked till push to production happens. 

### Performance test with Blazemeter

In this tile, we perform our performance testing with Taurus and Blazemeter. You can monitor the testing pass fail status in **View logs and history** . Once the stage finishes it will provide your a blaze meter hyperlink you can click to see graphical representations of your test results on blaze meter's website. The scripts that is sent to Blazemeter for perfomance testing is **performanceTest.yml** in root directory of DevOPs services. In this configuration file you set the pass/fail thresholds in **criteria** under **reporting**. You would change the milli seconds and duration of time in avg-rt ( average response time ) or the percentage of fails (fail) with the duration. 

### SauceLabs selenium test with database check

In this stage a selenium test is executed on the front end to send a message to the cloudant database using **Sauce Labs**. After that, a mocha test is run to check there is a value in the newly created test database. The Sauce Labs artifacts are uploaded to the **ARTIFACTS** tab in ** View logs and history ** . The Mocha test results are written to junit-xml and you can see them in the **TEST** tab in ** View logs and history **. You find the scripts in test/sauce in the root directory for your DevOPs service.

### Delete testing environment

Here our test application and database are deleted. We do this for this demonstration for resource considerations but it is common for enterprise tool chains to leave their testing environment up 24/7.

### Push to Production using Active Deploy service + Appscan

At this point our pipeline has gone through testing and the testing environment has been deleted. Now the goal is to push the new version of **Blue Messenger** to production. To do this we will use the Bluemix service **Active Deploy**. The Active Deploy service takes two running applications ( the new and old version ) and provides a zero downtime transition. For more information on the service see the Bluemix doc - 

https://www.ng.bluemix.net/docs/services/ActiveDeploy/index.html

After the deployment is done the last **JOB** done is a Rest API call to the binded service **App Scan Dynamic Analyzer**, which provideds us a security scan of our production application. After the API call you can monitor the progress of the scan by click on the service in your application's dashboard. For more information on the **App Scan Dynamic Analyzer** see the bluemix doc - 

https://www.ng.bluemix.net/docs/#services/AppScanDynamicAnalyzer/index.html#AppScanDynamicAnalyzer

### Monitoring 

This pipeline provides three different sources of real time data of our Blue Messenger in production. 

- Google Analytics - a link to your data is found here - https://ga-dev-tools.appspot.com/account-explorer/
- New Relic - load the dashboard from by selecting **Bluemessenger-NewRelic** in you application's dashboard
- Monitoring & Analytics - select the **Monitoring & Analytics** instance in your application's dashboard

### Track and Plan 

Blue provides a planning tool in DevOPs services. Select **TRACK & PLAN** at the top of your project.

for more see the docs -

https://hub.jazz.net/tutorials/trackplan/
