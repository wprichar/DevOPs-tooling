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

First we will sign up for **Slack** and **SauceLabs** that will be integrated into our pipeline. Select the **Deploy to Bluemix** button below 

 [![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/wprichar/DevOPs-tooling.git)
