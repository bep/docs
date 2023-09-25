---
title: "Image Upload"
slug: image-upload
_warning: "This file is auto generated. Do not edit it directly."
_apiMeta:
  path: /images/upload
  method: post
  ordinal: 108

---
Initiates an Image upload.

This endpoint creates a new private Image object and returns it along
with the URL to which image data can be uploaded.

- Image data must be uploaded within 24 hours of creation or the
upload will be canceled and the image deleted.

- Image uploads should be made as an HTTP PUT request to the URL returned in the `upload_to`
response parameter, with a `Content-type: application/octet-stream` header included in the
request. For example:

      curl -v \
        -H "Content-Type: application/octet-stream" \
        --upload-file example.img.gz \
        $UPLOAD_URL \
        --progress-bar \
        --output /dev/null

- Uploaded image data should be compressed in gzip (`.gz`) format. The uncompressed disk should be in raw
disk image (`.img`) format. A maximum compressed file size of 5GB is supported for upload at this time.

**Note:** To initiate and complete an Image upload in a single step, see our guide on how to [Upload an Image](/docs/products/tools/images/guides/upload-an-image/) using Cloud Manager or the Linode CLI `image-upload` plugin.

<!--more-->
