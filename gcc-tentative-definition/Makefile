example1.o: example1.c header.h
	$(CC) -c example1.c
	
example2.o: example2.c header.h
	$(CC) -c example2.c

main: example1.o example2.o
	$(CC) -fno-common example1.o example2.o -o main