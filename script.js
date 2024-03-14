<!-- Include the Quill library -->
<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>


<script>
// get a widget reference
const widget = uploadcare.MultipleWidget("[data-multiple=true]");
var mll= document.querySelector("#Multi-image-Links");

// listen to the "change" event
widget.onChange(function (group) {
  var arr = new Array();
  // get a list of file instances
  group.files().forEach((file) => {
    // once each file is uploaded, get its CDN URL from the fileInfo object

    file.done((fileInfo) => {
      arr.push({"url":fileInfo.cdnUrl}); // Push object with URL key
      mll.value=JSON.stringify(arr); // Convert array of objects to JSON string
      console.log(fileInfo.cdnUrl);
    });
  });
  console.log(arr);
});
</script>

<script>
// Get all form fields with attribute ms-code-convert="link"
const formFields = document.querySelectorAll('input[ms-code-convert="link"], textarea[ms-code-convert="link"]');

// Add event listener to each form field
formFields.forEach((field) => {
  field.addEventListener('input', convertToLink);
});

// Function to convert input to a link
function convertToLink(event) {
  const input = event.target;

  // Get user input
  const userInput = input.value.trim();

  // Check if input starts with http:// or https://
  if (userInput.startsWith('http://') || userInput.startsWith('https://')) {
    input.value = userInput; // No conversion needed for valid links
  } else {
    input.value = `http://${userInput}`; // Prepend http:// for simplicity
  }
}
</script>

<!-- Initialize Quill editor -->
<script>
var quill = new Quill('#editor', {
    modules: {
        toolbar: [
        	 [{ 'header': [2, 3, 4, 5, 6, false] }],
        
           ['bold', 'italic', 'underline', 'strike'],
           ['blockquote', 'code-block', 'link'],

           
           [{ 'list': 'ordered'}, { 'list': 'bullet' }],

           ['clean']
       ]
    },
  placeholder: 'You can start typing here...',
  theme: 'snow'
});

var form = document.querySelector('#post-form');
form.onsubmit = function() {
  // Populate hidden form on submit
  var about = document.querySelector('textarea[name=Description]');
  about.value = quill.root.innerHTML;
 
  
  console.log("Submitted", $(form).serialize(), $(form).serializeArray());
  
  // No back end to actually submit to!
	
  // return false;
};

</script>

<!-- 💙 MEMBERSCRIPT #39 v0.1 BODY CODE 💙 BETTER SELECT FIELDS -->
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script>
$(document).ready(function() {
    $('[ms-code-custom-select="select-with-search"]').select2();
});
</script>


<script>/*
            let myIframe = document.getElementById("myIframe");
            let endpoint = "https://airtable.com/embed/appipcEQWfOlgZHua/pagMHWktzcPXGPE6N/form";
            let url_string = window.location.href;
            let url = new URL(url_string);
            console.log(url_string);
            let name = "test"
            console.log(name);
            let email = "Completed";
            console.log(email);
            let fullURL = endpoint+"?prefill_Launch%20Name="+name+"&prefill_status="+email+"&hide_Launch%20Name=true";
            console.log(fullURL);
            myIframe.src = fullURL;*/
            
$(document).ready(function() {
  function prefillSelect2(fieldId) {
    var prefilledText = $(fieldId).val();
    if (prefilledText) {
      var valuesArray = prefilledText.split(',').map(value => value.trim());
      var select2Element = $(fieldId).siblings('select[ms-code-custom-select="select-with-search"]');
      select2Element.val(valuesArray).trigger('change.select2');
    }
  }

  prefillSelect2('#SpaceType'); 
  prefillSelect2('#SpaceAmenities'); 
  prefillSelect2('#SpaceOfferings'); 
  prefillSelect2('#CurrentStatus'); 
});


</script>


<script>

$('.jt-name').each(function(){
    var s = $(this).text();
    var cmsId = $(this).siblings('.cms-id').text(); // Get text from sibling element with class .cms-id
    $('#SpaceType').append('<option value="'+cmsId+'">'+s+'</option>');
});

$('.et-name').each(function(){
    var s1 = $(this).text();
    var cmsId1 = $(this).siblings('.cms-id').text(); // Get text from sibling element with class .cms-id
    $('#SpaceAmenities').append('<option value="'+cmsId1+'">'+s1+'</option>');
});

$('.lg-name').each(function(){
    var s2 = $(this).text();
    var cmsId2 = $(this).siblings('.cms-id').text(); // Get text from sibling element with class .cms-id
    $('#SpaceOfferings').append('<option value="'+cmsId2+'">'+s2+'</option>');
});
$('.sl-name').each(function(){
    var s3 = $(this).text();
    var cmsId3 = $(this).siblings('.cms-id').text(); // Get text from sibling element with class .cms-id
    $('#CurrentStatus').append('<option value="'+cmsId3+'">'+s3+'</option>');
});

</script>

<!-- Script to extract and display the YouTube video ID -->
<script>
document.getElementById('youtubeURL').addEventListener('input', function() {
    var url = this.value;

    // Regular expression for extracting the video ID from various YouTube URL formats
    var videoIDPattern = /(?:youtube\.com\/(?:[^\/\n\s]+\/\s*[^\/\n\s]+\/|(?:v|e(?:mbed)?)\/|\S*?[\?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    // Attempt to match the URL to the pattern
    var match = url.match(videoIDPattern);

    if (match && match[1]) {
        // If a match is found, set the video ID in the 'final-id' input field
        document.getElementById('Introduction-Video').value = match[1];
    } else {
        // If no match is found, you might want to clear the 'final-id' field or notify the user
        document.getElementById('Introduction-Video').value = '';
    }
});
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    // Select the submit button within '.ms_form-block'
    var submitButton = document.querySelector('.ms_form-block input[type="submit"]');
    console.log("Submit button found:", submitButton);

    // Select all required input and select fields within '.ms_form-block'
    var requiredFields = document.querySelectorAll('.ms_form-block input[required], .ms_form-block select[required]');
    console.log("Required fields found:", requiredFields.length);

    function checkRequiredFields() {
        var allFilled = true;
        requiredFields.forEach(function(field) {
            if (field.value === "") {
                allFilled = false;
            }
        });

        if (allFilled) {
            submitButton.removeAttribute('disabled');
            console.log("All fields filled. Submit enabled.");
        } else {
            submitButton.setAttribute('disabled', '');
            console.log("Not all fields filled. Submit disabled.");
        }
    }

    requiredFields.forEach(function(input) {
        input.addEventListener('change', checkRequiredFields);
        input.addEventListener('keyup', checkRequiredFields);
    });

    setTimeout(checkRequiredFields, 100);
});
</script>


<script>
$(document).ready(function() {
    // Initialize Select2 on your select elements
    $('.select').select2({
        // Select2 options as needed
    });

    function updateAllTags() {
        var allSelectedValues = [];
        
        // Loop through each select element
        $('.select').each(function() {
            // Add its selected values to the allSelectedValues array, each enclosed in double quotes
            var selectedValues = $(this).val() || [];
            var quotedValues = selectedValues.map(function(value) {
                return '"' + value + '"';
            });
            allSelectedValues.push(...quotedValues);
        });
        
        // Create a CSV string from all selected values, now each value is already enclosed in double quotes
        var csvString = allSelectedValues.join(',');
        
        // Set the CSV string as the value of the #All-Tags input
        $('#All-Tags').val(csvString);
        
        // Optional: Print the CSV string to the console
        console.log("CSV String: ", csvString);
    }

    // Attach the updateAllTags function as an event listener to all select elements
    $('.select').on('select2:select select2:unselect', function (e) {
        updateAllTags();
    });

    // Initial call to populate the input field on page load
    updateAllTags();
});
</script>
