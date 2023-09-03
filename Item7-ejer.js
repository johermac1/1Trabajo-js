function imprimirArrayMenosQuinto(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      // El índice del quinto elemento es 4, ya que el primer índice de un array es 0
      console.log(array[i]);
    }
  }
}
imprimirArrayMenosQuinto();
