function createDotedRect(row, column) {
    for (let i = 1; i <= row; i++) {
      // зашли на строчку
      let result = "";
      for (let j = 1; j <= column; j++) {
        result += "*";
      }
      console.log(result);
    }
  }
  //createDotedRect(3,4)
  
  function createDot(row, column) {
    for (let i = 1; i <= row; i++) {
      // зашли на строчку
      let result = "";
      for (let j = 1; j <= column; j++) {
        if (i === 1 || i === row || j === column || j === 1) {
          result += "*";
        } else {
          result += " ";
        }
      }
      console.log(result);
    }
  }
  //createDot(3,4)
  
  function createDotRect(row, column) {
    for (let i = 1; i <= row; i++) {
      // зашли на строчку
      let result = "";
      for (let j = 1; j <= column; j++) {
        if ((i === 1 || i === row) && (j === column || j === 1)) {
          result += "*";
        } else {
          if (i === 1 || i === row) {
            result += "-";
          } else if (j == 1 || j === column) {
            result += "|";
          } else {
            result += " ";
          }
        }
      }
      console.log(result);
    }
  }
  
  //createDotRect(3, 4)