# CloudtamerAPI
resources used
- AWS S3
- Lambda
- DynamoDB
-API Gateway

PREREQUISITES

- Ensure you have aws cli installed on your computer. instructions can be found here https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html
- run aws configure and configure using the aws.config. 

STEPS

1. Before Deploying the Lambda Functions, Create an S3 bucket and set up with Static Website Hosting. 
Permissions => Bucket Policy => Copy S3policy.json to the policy editor

2. add the index.html and createdb.yml files to the S3 bucket. (aws s3 cp /path/index.html s3://<bucket_name/index.html)
   (aws s3 cp /path/createdb.yml s3://<bucket_name/dynamodb.yml)

3. create the Database. You can use 2 options depending on your preference. 
  i. Use the cloudformation Stack: aws cloudformation create-stack --stack-name <stackname> --template-url s3://<bucket_name>/dynamodb.yml
  
  4. 
  
  # Latest Release - 1.0.0


  # Upcoming Changes
data to fileter based on user input
