 jQuery(document).ready(function() {
        var url = document.location.toString();
    if ( url.match('#') ) {
            var hash = url.split('#')[1];

        // expand the requested panel
        $('#' + hash).addClass('show');
        }
    });
