$(document).ready(function(){
  $('.submit').on('click',function(){
    var bandName = $('.bandname').val()
    console.log(bandName); 
    const APIController = () => {

      const clientId= '566685d396c446c88ddcdace5309b09a';
      const clientSecret= '7746dbd59ded4fdb8688f8304fe3ad53';
    
    
      const _getToken = async () => {
        
        const result = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
          },
          body: 'grant_type=client_credentials'
        });

    
        const data = await result.json()
        return data.access_token;
      }
  
      const _getBandId = async (token) => {
        const headers = new Headers()
        headers.append('Authorization', 'Bearer ' + token)
        const result = await fetch(`https://api.spotify.com/v1/search?q=${bandName}&type=artist&market=US&limit=1`, {
          method: 'GET',
          headers
        });
  
        const data = await result.json();
        return info = [data.artists.items[0].name, data.artists.items[0].genres, data.artists.items[0].images[0].url];
      }

      const _getTracks = async (token) => {
        const headers = new Headers()
        headers.append('Authorization', 'Bearer ' + token)
        const result = await fetch(`https://api.spotify.com/v1/search?q=${bandName}&type=artist&market=US&limit=1`, {
          method: 'GET',
          headers
        });
  
        const temp = await result.json();
        return nameId = temp.artists.items[0].id
      }
    
  
      return {
        getToken() {
          return _getToken();
        },
        getBandId(token) {
          return _getBandId(token);
        },
        getTracks(token,) {
          return _getTracks(token);
        }
      }
    };
    
    APIController().getToken().then(token => {
      console.log(token)
      APIController().getTracks(token)
      .then(trackList => {
        APIController().getBandId(token)
        .then(bandId => {
          console.log(bandId);
          var bandConcat = ''
          for(i=0; i < bandId[1].length; i++){
              bandConcat = bandConcat + bandId[1][i] + ' ';
          }
          if(bandConcat.search('rock') > -1 || bandConcat.search('Rock') > -1){
            return $('.rest').html( `
            <h1 class='result'>${bandId[0]} <span style="color:green">IS</span> a Rock Band!</h1>
            <img id = 'bandimg' class ='bandpic' src="${bandId[2]}">
            <h1 class='result'>And these are their best songs...</h1>
            <div class="tracks">
              <iframe src="https://open.spotify.com/embed/artist/${trackList}" width="600" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
            `);
            }else{
            return $('.rest').html( `
            <h1 class='result'>${bandId[0]} <span style="color:red">IS NOT</span> a Rock Band!</h1>
            <h1 style="text-align: center; margin-top: 20px; margin-bottom: 800px"><a href="#headerder" style="color: red">Why don't you try another band or artist?</a></h1>
            `)
            };
        })
        .catch(err => {
          console.log(('Error: ' + err))
        })

        $([document.documentElement, document.body]).animate({
          scrollTop: $("#all").offset().top
        }, 200);

      }).catch(err => {
        console.log(('Error: ' + err))
      })
    }).catch(err => {
      console.log(('Error: ' + err))
    })

  })
});
