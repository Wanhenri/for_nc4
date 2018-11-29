'open template.ctl'

'set x 1 1440'
'set y 1 480'
*Inicialização 'set t 1 last'
ti=1
tf=8
*n = numero de dias
n=1
'set fwrite -be trmm_daily.bin'
'set gxout fwrite'
while(n < 91)
say ''n
'p1=ave(r*24,t='ti',t='tf')'
'd p1'
ti= ti + 8
tf = tf + 8
n = n + 1
endwhile
'disable fwrite'
'quit'
