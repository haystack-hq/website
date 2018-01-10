
#upload the documents to the S3 bucket
echo "Uploading to S3 bucket"
aws s3 sync src/ s3://www.haystackhub.com/ --acl public-read --delete  --cache-control "public, max-age=86400"

