#include <stdio.h>
int main()
{
    int INDICE = 13, SOMA = 0, K = 0;

   while(K < INDICE)
   {
       K = K + 1;

       SOMA = SOMA + K;
   }
   printf("%d",SOMA);

return 0;
}

//1- P:Ao final do processamento, qual será o valor da variável SOMA?
//   R: Será de 91;