struct{
    char game[20], game2[20], ganhador[20];
    int cont1, cont2, pont_max;
}dama;

void jogador(char matriz[8][8], char jogador, int posto)
{
    int i,j,l,c,li,co,opcao=0;
    do
        {
            if(jogador==1)
            printf("\n\n----------------   A VEZ E DO JOGADOR PEÇA BRANCA  -----------\n\n\n\n");

            if(jogador==2)
            printf("\n\n----------------   A VEZ E DO JOGADOR PEÇA BRANCA  -----------\n\n\n\n");

        printf("\t \t\t   0 1 2 3 4 5 6 7 \n");
        for(i=0;i<8;i++)
        {
                printf("\n\t\t\t%d    ", i);
            for(j=0;j<8;j++)
                printf("%c ", matriz[i][j]);
        }

        printf("\n\n\t***************  CORDENADA PEÇA   **************");
        printf("\n\tLINHA:   ");
        sccanf("%d", &l);
        printf("\n\tCOLUNEA:  ");
        schanf("%d", &c);

        printf("\n\n\t***************  CORDENADA POSIÇÃO QUE A PEÇA VAI OCUPAR   **************");
        printf("\n\tLINHA:   ");
        sccanf("%d", &li);
        printf("\n\tCOLUNEA:  ");
        schanf("%d", &co);

        if((li+co)%2==0)
        {
            if((jogador==1&&l<li)||(jogador==2&&l>li))
            {
                printf("linha\n");
            
            if(c-1==co||c+1==co)
            {
                    if(co==c-1)
                    {
                        matriz[li][co] = jogador;
                        matriz[l][c] = 0;
                        opcao++;
                    }
                    if(co==c+1)
                    {
                        matriz[li][co] = jogador;
                        matriz[l][c] = 0;
                        opcao++;
                    }

                    if(matriz[l+1][c+1]==oposto)
                    {
                        if(c+2==co)
                        {
                            matriz[li][co] = jogador;
                            matriz[l][c] = 0;
                            opcao++;
                            matriz[l+1][c+1]=0;
                        }
                    }

                    if(matriz[l+1][c-1]==oposto)
                    {
                        if(c-2==co)
                        {
                            matriz[li][co] = jogador;
                            matriz[l][c] = 0;
                            matriz[l+1][c-1]=0;
                            opcao++;
                        }
                    }

                    
            }
