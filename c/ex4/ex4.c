#include <stdio.h>

void crash() {
  char *bad = NULL;
  int i = 0;
  for (i = 0; i < 10000; i++) {
    printf("%c", bad[i]);
  }
}

 int main()
{
  int age = 10;
  int height = 72;
  float pi = 3.14159f;
  printf("I am %d years old.\n", age);
  printf("I am %d inches tall.\n", height);
  printf("Pi is %.2f\n", pi);

  crash();

  return 0;
 }
