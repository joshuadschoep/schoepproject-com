aws cloudfront create-invalidation --distribution-id $AWS_CLOUDFRONT_DIST --paths "$INDEX_FILE" "$STATIC_FOLDER/*"