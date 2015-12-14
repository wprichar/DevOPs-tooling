# Workload - DevOps Tooling

###DevOPs continuous integration applied to Blue Messenger

The Bluemix Pipeline has been created and applied to the Architecture Center's application Bluemessenger.

## Introduction

This pipeline demonstrates a contious integration pipeline. When changes are pushed in **GIT** to the master branch, **linting**, **unit testing**, **deployment to a test environment**, **performance testing**, and **behavioral testing** is initiated and validated before a zero-downtime deployment to production.
Monitoring happens throughout the pipeline's cycle through Bluemix's slack intergration. The services **NewRelic** and **Monitoring and Analytics** are also used to give real time data on status of pipeline.

## Sign up for / Log into Bluemix and DevOps

Sign up for Bluemix at https://console.ng.bluemix.net and DevOps Services at https://hub.jazz.net.
When you sign up, you'll create IBM ID, create an alias, and register with Bluemix. 


## Deploy to Bluemix

First we will sign up for **Slack** and **SauceLabs** that will be integrated into our pipeline. Select the **Deploy to Bluemix** button below. In the deployment screen that comes up, you will see the intergration sections for **Slack** and **SAUCE LABS**. Select **Create an account** on both to retrieve you needed information for the fields requested.

 [![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/wprichar/DevOPs-tooling.git)
 

Once you fill in the needed fields click **DEPLOY**. This will start the deployment of **Blue Messenger** and the static services used with the application. 

 After the pipeline has been configured, you can monitor the deployment by doing the following steps

Select your newly created project in DevOps Services.
Go to MY PROJECTS
Select BUILD & DEPLOY
You can monitor the stages by selecting View logs and history.
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
2. In the public/index.html file, in the **script** block with the **GoogleAnalyticsObject** in it replace the **<replace me>** in the first **ga()** field with your **Tracking ID**

Do not commit and push to master yet. We will first make a noticeable change to the application to simulate a new version update and then commit to master, which will kick off our pipeline. 

## Make change to Application and Commit changes to master

Now we need to create a change to the source code and commit the changes to the master branch. Once we do this, it will kick off the pipeline and we can monitor each deployment stage from there.

1. Return to your project in Bluemix DevOps Services and click EDIT CODE at top right of the page.
2. in the public/index.html file change the title of the application from **Blue Messenger** to **< yourname >'s BlueMessenger**
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

to install our needed dependencies.

### Linting + Unit test

Here we perform our syntax checking with jslint and csslint. The script files that are called 


### Push to test

This stage pushes our new version of BlueMessenger to a Cloud Foundry application with the test extension to be used for testing.

### Performance test with Blazemeter

In this tile, we perform our performance testing with Taurus and Blazemeter. 

### SauceLabs selenium test with database check

### Delete testing environment

### Push to Production using Active Deploy service + Appscan
