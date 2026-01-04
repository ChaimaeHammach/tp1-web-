
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
    
    
}

function validerEmail(email) {
   
    if (!email.includes('@')) {
        return false;
    }
    

    const positionAt = email.indexOf('@');
    
   
    if (positionAt === 0) {
        return false;
    }
    
    if (positionAt === email.length - 1) {
        return false;
    }
    
   
    const partieApresAt = email.substring(positionAt + 1);
    if (!partieApresAt.includes('.')) {
        return false;
    }
    

    const positionPoint = partieApresAt.indexOf('.');
    if (positionPoint === 0) {
        return false;
    }
    
    return true;
}

// Tests
console.log(validerEmail("test@exemple.com")); 
console.log(validerEmail("test@exemple"));
console.log(validerEmail("testexemple.com")); 
console.log(validerEmail("@exemple.com")); 
console.log(validerEmail("test@.com")); 


function trier(liste) {
    
    let listeTriee = [...liste];
    
    for (let i = 0; i < listeTriee.length; i++) {
        for (let j = 0; j < listeTriee.length - 1 - i; j++) {
            if (listeTriee[j] > listeTriee[j + 1]) {
               
                let temp = listeTriee[j];
                listeTriee[j] = listeTriee[j + 1];
                listeTriee[j + 1] = temp;
            }
        }
    }
    
    return listeTriee;
}


function trier(liste) {
    return [...liste].sort((a, b) => a - b);
}

// Test
let nombres = [5, 2, 8, 1, 9, 3];
console.log(trier(nombres)); 
console.log(nombres); 

function calculerSomme() {
            // Récupérer les valeurs du premier temps
            let h1 = parseInt(document.getElementById('h1').value) || 0;
            let m1 = parseInt(document.getElementById('m1').value) || 0;
            let s1 = parseInt(document.getElementById('s1').value) || 0;
            
            // Récupérer les valeurs du deuxième temps
            let h2 = parseInt(document.getElementById('h2').value) || 0;
            let m2 = parseInt(document.getElementById('m2').value) || 0;
            let s2 = parseInt(document.getElementById('s2').value) || 0;
            
            // Récupérer les valeurs du troisième temps
            let h3 = parseInt(document.getElementById('h3').value) || 0;
            let m3 = parseInt(document.getElementById('m3').value) || 0;
            let s3 = parseInt(document.getElementById('s3').value) || 0;
            
            // Convertir tout en secondes
            let totalSecondes = 0;
            totalSecondes += (h1 * 3600) + (m1 * 60) + s1;
            totalSecondes += (h2 * 3600) + (m2 * 60) + s2;
            totalSecondes += (h3 * 3600) + (m3 * 60) + s3;
            
            // Convertir en jours, heures, minutes, secondes
            let jours = Math.floor(totalSecondes / 86400);
            totalSecondes = totalSecondes % 86400;
            
            let heures = Math.floor(totalSecondes / 3600);
            totalSecondes = totalSecondes % 3600;
            
            let minutes = Math.floor(totalSecondes / 60);
            let secondes = totalSecondes % 60;
            
         
            document.getElementById('jours').value = jours;
            document.getElementById('heuresTotal').value = heures;
            document.getElementById('minutesTotal').value = minutes;
            document.getElementById('secondesTotal').value = secondes;
        }
        
       
        function effacer() {
            document.getElementById('h1').value = 0;
            document.getElementById('m1').value = 0;
            document.getElementById('s1').value = 0;
            
            document.getElementById('h2').value = 0;
            document.getElementById('m2').value = 0;
            document.getElementById('s2').value = 0;
            
            document.getElementById('h3').value = 0;
            document.getElementById('m3').value = 0;
            document.getElementById('s3').value = 0;
            
            document.getElementById('jours').value = '';
            document.getElementById('heuresTotal').value = '';
            document.getElementById('minutesTotal').value = '';
            document.getElementById('secondesTotal').value = '';
        }
        