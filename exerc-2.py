N = int(input("Digite o numero que você gostaria de checar: "))

f3 = 0
f1 = 1
f2 = 1
if (N == 0 or N == 1):
    print("Seu número faz parte da sequência de Fibonacci!")

else:
    while f3 < N:
        f3 = f1 + f2
        f2 = f1
        f1 = f3
    if f3 == N:
        print("Seu número faz parte da sequência de Fibonacci!")
    else:
        print("Seu número NÃO faz parte da sequência de Fibonacci!")