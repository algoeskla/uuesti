<?php
echo "tere";
print("hello");
printf("praegune kellaaeg on: " . (new DateTime())->format('Y-m-d H:I:s')); 

function addOne(int $num): int {
    return $num + 1;
}
?> 
<h1>Minu oma leht<h1>

<?php echo "tere jälle" ?>

<p><?php echo 10+10; ?></p> 


<h2>Lehed:</h2>
<a href="/calculator.php">Mine kalkulaatori lehele</a>
</br>
<a href="/replybot">Mine ReplyBot lehele</a>