//O carro e o caminhão estão à mesma distância de Ribeirão Preto ao eles se cruzarem, eles se encontram a 60,9 km de Ribeirão Preto

//Como se determinar o local de cruzamento?
//Para determinar o local em que o carro e o caminhão se cruzam podemos colocar o ponto de referência em Ribeirão Preto, então, a equação horária do carro é:
 x1 = v1.t
//Como o caminhão sai de um local 100 km distante do ponto de referência e se aproxima dele, sua equação horária é:
x2  = 100km - v2.t

//Como o caminhão tem 2 pedágios como obstáculo e perde 5 minutos em cada um deles, podemos calcular o tempo de viagem sem os obstáculos:
tSO = 100km/80km/h = 1,25h

//Porém, como perde 10 minutos (ou 0,17 horas) nos pedágios, o tempo de viagem para o caminhão será de 1,25h+0,17h=1,42h. Sua velocidade média é:
v2 = 100km/1,42h = 70,6 km/h

//Nas equações horárias podemos limpar o tempo e igualar ambas para achar o ponto em que o carro e o caminhão se cruzam:
t = x1/v1
t = x2 - 100km/-v2
x1 = x2 => x/v1 = x-100km/-v2
-v2.x = v1.x - v1.100km
x = v1.100km/v1+v2 = 110km/h.100km / 110km + 70,6km/h
x = 60,9km

//Logo, 60,9 é a distância da cidade de Ribeirão Preto em que o carro e o caminhão se cruzam, onde ambos estão à mesma distância.

