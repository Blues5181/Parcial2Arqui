
const endPoint = "https://reconocedorderostros.cognitiveservices.azure.com/face/v1.0/detect?returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise"
const key = "5c7bc0e45f49490f8af52e4e8ef83fd1"
const conexion ="https://registroparcial.azurewebsites.net/ingre/api/DatosBiome"
document.getElementById("buscar").addEventListener("click", () => {
    let urlImg = document.getElementById("urlImg").value
    fetch(endPoint, {
        method: 'POST',
        body: JSON.stringify({
            url: urlImg
        }),
        headers: {
            "Content-type": "application/json",
            "Ocp-Apim-Subscription-Key": key
        }
    })
    .then(response => response.json())
    .then(json => {
        if (json.length > 0) {
            const Mascarilla = json[0].faceAttributes.accessories.find(Mascarilla => Mascarilla.type == "mask")
            if (Mascarilla) {
                if (Mascarilla.confidence >= 0.8) {
                    alert("Mascarilla detectada,")
                } else alert("El acceso soo esta permitido con el uso de mascarilla")
            } else alert("El accesso solo esta permitdo con el uso de mascarilla")
        } else alert("No se detecta ningun rosto")
    })
})

document.getElementById("Biometrico").addEventListener('click', () => {

    let urlImg = document.getElementById("urlImg").value
    fetch(conexion, {
        method: 'POST',
        body: JSON.stringify({
             urlImg,
             day: document.getElementById("lisDia").value
        }),
        headers: {
            "Content-type": "application/json",
            "Ocp-Apim-Subscription-Key": key
        }
    })
    .then(response => response.json())
    .then(json => {
      if (json.subccess) {
          alert("adelante, acceso permitido")
      } else {
        alert(`Accesso Denegado. ${json.msg}`)
      }
    })



})