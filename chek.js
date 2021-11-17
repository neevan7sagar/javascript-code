<html>
    <body>
        <script>
        var X = { foo : 1}; 
var Output = (function() 
{ 
delete X.foo; 
return X.foo; 
} 
)(); 
console.log(output);

        </script>
    </body>
</html>