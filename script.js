document.getElementById("runPhpButton").addEventListener("click", function() {
    // Send an AJAX request to the PHP script
    fetch("process.php")
        .then(response => response.text())
        .then(data => {
            // Update the output area with the PHP-generated content
            document.getElementById("output").innerHTML = data;
        });
});
