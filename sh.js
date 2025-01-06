function calculateProbability() {
   
    const totalOutcomes = parseInt(document.getElementById('totalOutcomes').value);
    const favorableOutcomes = parseInt(document.getElementById('favorableOutcomes').value);
  
    
    if (isNaN(totalOutcomes) || isNaN(favorableOutcomes) || totalOutcomes <= 0 || favorableOutcomes < 0) {
      document.getElementById('result').innerHTML = "กรุณากรอกข้อมูลให้ครบ.";
      return;
    }
  
   
    const probability = favorableOutcomes / totalOutcomes;
  
   
    document.getElementById('result').innerHTML = `ความเป็นไปได้คือ ${probability.toFixed(2)} หรือ ${(probability * 100).toFixed(2)}%`;
  }
  