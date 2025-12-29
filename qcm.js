
function reinitialiser() {
   
    var inputs = document.querySelectorAll('input');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }

    var questions = document.querySelectorAll('.question');
    for (var i = 0; i < questions.length; i++) {
        questions[i].style.backgroundColor = '';
    }
    
   
    document.getElementById('score').textContent = '';
    
    // Message de confirmation
    alert('✅ Le QCM a été réinitialisé !');
}



function afficherReponses() {
  
    var newWindow = window.open('', '_blank', 'width=800,height=600');
    
   
    var questions = document.querySelectorAll('.question');
    
  
    var html = '<html><head><meta charset="UTF-8"><title>Réponses Correctes</title></head><body>';
    html += '<h1>📋 Questions et Réponses Correctes</h1>';
    
    
    for (var i = 0; i < questions.length; i++) {
        var question = questions[i];
        
      
        var texteQuestion = question.querySelector('h3').textContent;
     
        var bonneReponse = question.getAttribute('data-correct');
        
       
        html += '<div style="margin:20px; padding:15px; background-color:lightgreen; border-radius:8px;">';
        html += '<h3>' + texteQuestion + '</h3>';
        html += '<p><strong>✅ Réponse(s) correcte(s) : ' + bonneReponse.toUpperCase() + '</strong></p>';
        html += '</div>';
    }
    
    html += '</body></html>';
    
 
    newWindow.document.write(html);
    newWindow.document.close();
}


function afficherResultat() {
  
    var total = 0;
    var bonnes = 0;
    

    var questions = document.querySelectorAll('.question');
    
   
    for (var i = 0; i < questions.length; i++) {
        var question = questions[i];
        total++;
        
       
        var bonneReponse = question.getAttribute('data-correct');
        
    
        var premierInput = question.querySelector('input');
        var estMultiple = (premierInput.type === 'checkbox');
        
        var estCorrect = false;
        
        
        if (estMultiple) {
        
            var coches = question.querySelectorAll('input:checked');
            var reponses = [];
            
            
            for (var j = 0; j < coches.length; j++) {
                reponses.push(coches[j].value);
            }
            
          
            reponses.sort();
            var bonnesReps = bonneReponse.split(',').sort();
            
     
            estCorrect = (JSON.stringify(reponses) === JSON.stringify(bonnesReps));
            
        } 
        
        else {
        
            var coche = question.querySelector('input:checked');
            var reponse = coche ? coche.value : '';
            
          
            estCorrect = (reponse === bonneReponse);
        }
        
        
        if (estCorrect) {
            bonnes++;
            question.style.backgroundColor = 'lightgreen';
        } else {
            question.style.backgroundColor = 'lightcoral';
        }
    }
  
    var pourcentage = Math.round((bonnes / total) * 100);
   
    var scoreDiv = document.getElementById('score');
    scoreDiv.textContent = '🎯 Score : ' + bonnes + '/' + total + ' (' + pourcentage + '%)';
    
    
    if (pourcentage === 100) {
        scoreDiv.textContent += ' - 🎉 Parfait !';
    } else if (pourcentage >= 80) {
        scoreDiv.textContent += ' - 👍 Très bien !';
    } else if (pourcentage >= 60) {
        scoreDiv.textContent += ' - 😊 Bien !';
    } else {
        scoreDiv.textContent += ' - 📚 Il faut réviser !';
    }
}
