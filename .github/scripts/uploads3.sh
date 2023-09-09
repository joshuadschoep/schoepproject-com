pwd
ls
echo $STATIC_FOLDER;
echo $INDEX_FILE;

aws s3 sync $STATIC_FOLDER s3://$AWS_S3_BUCKET/
aws s3 sync $INDEX_FILE s3://$AWS_S3_BUCKET/