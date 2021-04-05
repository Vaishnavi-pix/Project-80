function getP1()
  {
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
      inputs.push(document.getElementById("input_box" + i).value);
    }
  document.getElementById("showP1").innerHTML = inputs.join(". ");
  }
  function getP2()
  {
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
      inputs.push(document.getElementById("2input_box" + i).value);
    }
  document.getElementById("showP2").innerHTML = inputs.join(". ");
  }