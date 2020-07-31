tinymce.init({
  selector: '#textarea',
  width: 1000,
  height: 1000,
  plugins: [
    'advlist autolink link image lists charmap print preview hr anchor pagebreak',
    'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
    'table emoticons template paste help'
  ],
  toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent | link image | print preview media fullpage | ' +
    'forecolor backcolor emoticons | help',
  menu: {
    favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'}
  },
  menubar: 'favs file edit view insert format tools table help',
  content_css: 'css/content.css',


  // ei jaigat link change korte lagbo
  images_upload_url: 'postAcceptor.php',
});


tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  
  file_picker_callback: function(callback, value, meta) {
    // Provide file and text for the link dialog
    if (meta.filetype == 'file') {
      callback('mypage.html', {text: 'My text'});
    }

    // Provide image and alt text for the image dialog
    if (meta.filetype == 'image') {
      callback('myimage.jpg', {alt: 'My alt text'});
    }

    // Provide alternative source and posted for the media dialog
    if (meta.filetype == 'media') {
      callback('movie.mp4', {source2: 'alt.ogg', poster: 'image.jpg'});
    }
  }
});


// eda hoise php er ta 
// tinymce.init({
//   selector: "textarea",  // change this value according to your HTML
//   plugins: "image",
//   menubar: "insert",
//   toolbar: "image",
//   image_uploadtab: true
// });

// tinymce.init({
//   selector: 'textarea',
//   plugins: 'image code',
//   toolbar: 'undo redo | image code',
  
//   // without images_upload_url set, Upload tab won't show up
//   images_upload_url: 'postAcceptor.php',
  
//   // we override default upload handler to simulate successful upload
//   images_upload_handler: function (blobInfo, success, failure) {
//     setTimeout(function() {
//       // no matter what you upload, we will turn it into TinyMCE logo :)
//       success('http://moxiecode.cachefly.net/tinymce/v9/images/logo.png');
//     }, 2000);
//   },
  
//   init_instance_callback: function (ed) {
//     ed.execCommand('mceImage');
//   }
// });