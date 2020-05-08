aws s3 cp ./dist s3://$S3_BUCKET \
  --exclude="*" --include="*.js.br" \
  --content-encoding br \
  --content-type="application/javascript" \
  --cache-control "max-age=31536000" \
  --metadata-directive REPLACE --recursive

aws s3 cp ./dist s3://$S3_BUCKET \
  --exclude="*" --include="*.js.gz" \
  --content-encoding gzip \
  --content-type="application/javascript" \
  --cache-control "max-age=31536000" \
  --metadata-directive REPLACE --recursive

aws s3 cp ./dist s3://$S3_BUCKET \
  --exclude="*" --include="*.ttf.br" \
  --content-encoding br \
  --content-type="font/ttf" \
  --cache-control "max-age=31536000" \
  --metadata-directive REPLACE --recursive

aws s3 cp ./dist s3://$S3_BUCKET \
  --exclude="*" --include="*.ttf.gz" \
  --content-encoding gzip \
  --content-type="font/ttf" \
  --cache-control "max-age=31536000" \
  --metadata-directive REPLACE --recursive
