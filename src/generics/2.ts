type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
  }
  
  function compare  (top: any, bottom: any): AllType {
    type Info = Pick<AllType, 'name' | 'position' | 'color' | 'weight'>;
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
  }

  console.log(compare(1, 2));