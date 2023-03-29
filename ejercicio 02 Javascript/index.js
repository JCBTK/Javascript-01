function Transporte(Distancia) {
    if (Distancia >= 0 && Distancia < 1000) {
      return "A pie";
    } else if (Distancia >= 1000 && Distancia < 10000) {
      return "Bicicleta";
    } else if (Distancia >= 10000 && Distancia < 30000) {
      return "Colectivo";
    } else if (Distancia >= 30000 && Distancia < 100000) {
      return "Auto";
    } else if (Distancia >= 100000) {
      return "Avion";
    } else {
      return "Distancia no valida";
    }
  }
