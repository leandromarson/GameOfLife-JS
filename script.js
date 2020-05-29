var gradeAltura = 400
var gradeLargura = 400
var grade = criarArray(gradeLargura)
var gradeEspelho = criarArray(gradeLargura)

preencherRandom()
tick()


function tick(){
    desenharGrade()
    updateGrade()
    requestAnimationFrame(tick)
}

function criarArray(linhas){
    var arr = []
    for(var i = 0; i < linhas; i++){
        arr[i] = []
    }
    return arr
}

function preencherRandom(){
    for(var i = 0; i < gradeAltura; i++){
        for(var j = 0; j < gradeLargura; j++){
            var rand = Math.random()
            var cvRand = (rand * 2)
            var binario = Math.floor(cvRand)
            if(binario === 1){
                grade[i][j] = 1
            }else{
                grade[i][j] = 0
            }
        } 
    }
}
    
function desenharGrade(){
    var tela = document.getElementById("tela")
    var ctx = tela.getContext("2d")
    ctx.clearRect(0, 0, 400, 400)

    for (var i = 1 ; i < gradeAltura; i++){
        for(var j = 1; j < gradeLargura; j++){
            if(grade[i][j] === 1){
                ctx.fillStyle = "#3b2f75"
                ctx.fillRect(i, j, 1, 1)
            }
        } 
    }
}

function updateGrade(){
    for (var i = 1 ; i < gradeAltura - 1; i++){
        for(var j = 1; j < gradeLargura - 1; j++){
            var totCel = 0
            totCel += grade[i - 1][j - 1]
            totCel += grade[i - 1][j]
            totCel += grade[i - 1][j + 1]
            
            totCel += grade[i][j - 1]
            totCel += grade[i][j + 1]

            totCel += grade[i + 1][j - 1]
            totCel += grade[i + 1][j]
            totCel += grade[i + 1][j + 1]

            if(grade[i][j] === 0){
                switch(totCel){
                    case 3:
                       gradeEspelho[i][j] = 1
                       break
                    default:
                        gradeEspelho[i][j] = 0     
                }
            }else if(grade[i][j] === 1){
                switch(totCel){
                    case 0:
                    case 1:
                        gradeEspelho[i][j] = 0
                        break
                    case 2:
                    case 3:
                       gradeEspelho[i][j] = 1
                       break
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        gradeEspelho[i][j] = 0
                        break
                    default:
                        gradeEspelho[i][j] = 0     
                }
            }
        } 
    }

    for (var i = 0 ; i < gradeAltura; i++){
        for(var j = 0; j < gradeLargura; j++){
            grade[i][j] = gradeEspelho[i][j]
        }
    }    
}







