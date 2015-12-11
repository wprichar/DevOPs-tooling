# Workload - DevOps Tooling

###DevOPs continuous integration applied to Blue Messenger

The Bluemix Pipeline has been created and applied to the Architecture Center's application Bluemessenger.

## Introduction

This pipeline demonstrates a contious integration pipeline. When changes are pushed in **GIT** to the master branch, **linting**, **unit testing**, **deployment to a test environment**, **performance testing**, and behavioral testing is initiated and validated before a zero-downtime deployment to production.
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
 
 ## Retrive Blazemeter token 
 
 The pipeline uses **Blazemeter** for it's performance testing. We need to get the API Token from our provisioned **Blazemeter** account and put it in the pipeline.

## Sign up for Google Analytics and put API into the source code

Google Analytics has been intergrated into this version of Blue Messenger. To link your own google analytics to your Blue Messenger you will need to retrieve a **Tracking ID**. To get on visit - 

https://ga-dev-tools.appspot.com/account-explorer/

Once you have obtained a **Tracking ID** it needs to be put into the applications source code. 

## Make change to Application and Commit changes to master

Now we need to create a change to the source code and commit the changes to the master branch. Once we do this, it will kick off the pipeline and we can monitor each deployment stage from there.

## Monitor pipeline for continous deployment education

At this point in the guide we have started the pipeline and we will now review each stage and how it demonstrates DevOPs and contious integration. 

### Build Stage

### Linting + Unit test

### Push to test

### Performance test with Blazemeter

### SauceLabs selenium test with database check

### Delete testing environment

### Push to Production using Active Deploy service + Appscan
