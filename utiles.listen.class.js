(function() {
    init();
})();

let flag_ = false;
let ventana_ = $(window);
let flagSkin = false;
let flagItt = false;
let flagNot = false;


function init (){
    const windowEvent       = addEventListener('message', procesarMensaje, false);

    console.log("init coop_dfp_tipo: ",coop_dfp_tipo);
        if(window.addEventListener)
            {
                windowEvent;
            }else if(window.onmessage){
                procesarMensaje            
            }
}

function procesarMensaje(e) {
        const { data } = e;
        const {tipo, cmd, params, mensaje, cerrar } = data;
        console.log("procesarMensaje coop_dfp_tipo: ",coop_dfp_tipo);

        let plataforma = detectmob();

        console.log("procesarMensaje cerrar: ",cerrar);
        console.log("procesarMensaje plataforma: ",plataforma);
        console.log("procesarMensaje mensaje: ", mensaje);

        if(mensaje){
            if (!cerrar && mensaje !== 'itt'){
                console.log("entra megacondicion");
                console.log("procesarMensaje llamando instanciaFormatVideoAds");
                instanciaFormatVideoAds();
                    }else{
                        if (typeof e !== 'object' || typeof tipo !=='string'|| cmd !== 'safe-frame' || typeof params !== 'object') {return false;}
                            switch (mensaje){
                                case('newItt'):
                                    procesaNewItt(data);
                                break;
                                case ('itt' ):
                                    procesaItt(data);
                                break;
                                case ('expandible'):
                                    procesaExpandible(data); 
                                break;
                                case ('footer'):
                                    procesaFooter(data);
                                break;
                            }    
                        }
            }else{
                    console.log("procesarMensaje flagNot llamando instanciaFormatVideoAds");
                    instanciaFormatVideoAds();
                }     
}

function instanciaFormatVideoAds(){
    console.log("instanciaFormatVideoAds coop_dfp_tipo: ",coop_dfp_tipo);
    
    if(detectmob() === 1){
        console.log("instanciaFormatVideoAds flagNot detectmob = 1: ",flagNot);

        if (!flagNot){
            flagNot = true;
            switch (coop_dfp_tipo){
                case ('portada'):
                    go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_m_preroll_home_stiky&description_url=http%3A%2F%2Fwww.cooperativa.cl&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',[null], [null], [null]);
                break;
                case ('articulo'):
                    go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_m_preroll_inread&description_url=https%3A%2F%2Fwww.cooperativa.cl%2F&tfcd=0&npa=0&sz=640x360&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',arraySeccion, arrayTem, arrayStem); 
                break;
            }
        }
    }else if(detectmob() === 0){
        
        console.log("instanciaFormatVideoAds flagNot detectmob = 0: ",flagNot);
        if (!flagNot){
            flagNot = true;
            switch (coop_dfp_tipo){
                case ('portada'):
                    go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_d_preroll_home_stiky&description_url=http%3A%2F%2Fwww.cooperativa.cl&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',[null], [null], [null]);
                break;
                case ('articulo'):
                    go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_d_preroll_inread&description_url=https%3A%2F%2Fwww.cooperativa.cl%2F&tfcd=0&npa=0&sz=640x360&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',arraySeccion, arrayTem, arrayStem); 
                break;
            } 
        }
    }
}
function procesaNewItt(data){
    flag_ = true;                   

    const { params, tipo } = data;
    const { height, width, margin} = params;

    let contendedor_iframe                      = document.getElementsByClassName(tipo);
    let iframe                                  = contendedor_iframe[0].getElementsByTagName('iframe');

    contendedor_iframe ? 
        
        (contendedor_iframe[0].style.height      = height             || null,
        contendedor_iframe[0].style.width        = width              || null,
        contendedor_iframe[0].style.margin       = margin             || null ) 
        : false;
    /* /Contedor iframe*/

    /*Iframe*/
         iframe ?  
         (iframe[0].style.height                 = height             || null,
         iframe[0].style.width                   = width              || null) 
         : false;
    /* /Iframe*/
    googletag.pubads().addEventListener('slotOnload', function(event) {

        window.addEventListener('scroll', function(e) {
          scroll_position = window.scrollY; 
          if(scroll_position >= 600){
            let flag = detectmob();
                if(flag){
                    hideWindow(flag);
                }else{
                    hideWindow(flag);  
                }
          }          
      });
      if(event.slot.getSlotElementId() === "coop_d_1x1_1" ){
            // document.getElementById("div-gpt-ad-1530907428377-2").style.display="none";
            console.log("dibuja newitt")
          }else{ 
              if(event.slot.getSlotElementId() === "coop_m_1x1_1") {
                document.getElementById("div-gpt-ad-1530907736655-2").style.display="none";     
              }
            }
        });
}

function detectmob() {
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return 1;
     }
    else {
       return 0;
     }
   }

function procesaItt(data){
        /*Contedor iframe*/
        const { params, tipo, cerrar} = data;
        const { position, height, width, zIndex, display, marginTop, top, left, bottom } = params;
         console.log("procesaItt cerrar: ",cerrar);
         console.log("procesaItt coop_dfp_tipo: ",coop_dfp_tipo);
         console.log("procesaItt flagItt: ",flagItt)
            if(!flagItt){
                if (cerrar === 1){
                    flagItt = true;
                    console.log("procesaItt llamando instanciaFormatVideoAds");
                    instanciaFormatVideoAds();
                }
            }
        

        let contendedor_iframe                      = document.getElementsByClassName(tipo);
        let iframe                                  = contendedor_iframe[0].getElementsByTagName('iframe');
       
        contendedor_iframe ? 
            (contendedor_iframe[0].style.position   = position          || null,
            contendedor_iframe[0].style.height      = height            || null,
            contendedor_iframe[0].style.width       = width             || null,
            contendedor_iframe[0].style.zIndex      = zIndex            || null,
            contendedor_iframe[0].style.marginTop   = marginTop         || null,
            contendedor_iframe[0].style.top         = top               || null,
            contendedor_iframe[0].style.bottom      = bottom            || null,
            contendedor_iframe[0].style.left        = left              || null ) 
            : false;
        /* /Contedor iframe*/

        /*Iframe*/
             iframe ?  
             (iframe[0].style.position              = position          || null,
             iframe[0].style.height                 = height            || null,
             iframe[0].style.width                  = width             || null,
             iframe[0].style.display                = display           || null,
             iframe[0].style.top                    = top               || null,
             iframe[0].style.left                   = left              || null ) 
             : false;
        /* /Iframe*/
}

function hideWindow(plataforma) {
    console.log("hideWindow  plataforma: ",plataforma);
    
        if(plataforma === 1){
            document.getElementById("coop_m_1x1_1").style.display="none";
            document.getElementById("div-gpt-ad-1530907736655-2").style.display="initial";
            flagSkin = true;
        }else{ if(plataforma === 0){
            document.getElementById("coop_d_1x1_1").style.display="none";
            document.getElementById("div-gpt-ad-1530907428377-2").style.display="initial";
            flagSkin = true;
            }  
        }      
    }

    async function procesaSkin(data){
        
            if(!flag_){
                flagSkin = true;
            }else{
                ventana_.on('scroll', function(){
                    dibujaSkin(data, flagSkin,flag_);
                    }); 
            }
            dibujaSkin(data, flagSkin,flag_);      
    }

    function dibujaSkin(data, flagSkin, flag_){

        if (flagSkin || !flag_){
            const {tipo, params, trackUrl } = data;
            const {position, height, width, display, top, left, tag} = params;

            let style_tag                               = tag;
            let style                                   = document.createElement('style');
            let scriptTrack                             = document.createElement('script');

            let contendedor_iframe                      = document.getElementsByClassName(tipo);
            let iframe                                  = contendedor_iframe[0].getElementsByTagName('iframe');

            /*Iframe*/
            if(trackUrl){
                iframe ?  
                (iframe[0].style.position               = position          || null,
                iframe[0].style.height                  = height            || null,
                iframe[0].style.width                   = width             || null,
                iframe[0].style.display                 = display           || null,
                iframe[0].style.top                     = top               || null,
                iframe[0].style.left                    = left              || null, 
                scriptTrack.src                         = trackUrl          || null,

                style.appendChild(document.createTextNode(style_tag)),
                document.getElementsByTagName('body')[0].appendChild(style),
                document.getElementsByClassName(tipo)[0].appendChild(scriptTrack),
                
                document.addEventListener("DOMContentLoaded", function(e) {
                    document.getElementsByTagName("NAV")[0].classList.add("sticky")
                    }),  
                    $(function() {
                        $(window).scroll(function() {
                            if ($(this).scrollTop() > 200) { 
                                $('header nav').addClass("sticky"); 
                                    } else { 
                                        $('header nav').addClass("sticky"); 
                                    }
                        });
                    })
                )                     
                : false;

                }else{
                    iframe ?  
                (iframe[0].style.position               = position          || null,
                iframe[0].style.height                  = height            || null,
                iframe[0].style.width                   = width             || null,
                iframe[0].style.display                 = display           || null,
                iframe[0].style.top                     = top               || null,
                iframe[0].style.left                    = left              || null, 

                style.appendChild(document.createTextNode(style_tag)),
                document.getElementsByTagName('body')[0].appendChild(style),
                document.addEventListener("DOMContentLoaded", function(e) {
                    document.getElementsByTagName("NAV")[0].classList.add("sticky")
                    }),  
                    $(function() {
                        $(window).scroll(function() {
                            if ($(this).scrollTop() > 200) { 
                                $('header nav').addClass("sticky"); 
                                    } else { 
                                        $('header nav').addClass("sticky"); 
                                    }
                        });
                    })
                )                     
                : false;
                }
            }

    }

    function procesaExpandible(data){
        const { tipo, params } = data;
        const { height, width, tag } = params;

        let style_tag = tag;
        let style = document.createElement('style');

        let contendedor_iframe                      = document.getElementsByClassName(tipo);
        let iframe                                  = contendedor_iframe[0].getElementsByTagName('iframe');

            /*Iframe*/
            iframe ?  
            (iframe[0].style.height                 = height            || null,
            iframe[0].style.width                   = width             || null
            ): false;            
            /* /Iframe*/
        
        style.appendChild(document.createTextNode(style_tag));
        document.getElementsByTagName('body')[0].appendChild(style);  
    }

    function procesaFooter(data){
        /*Contedor iframe*/
        const { params, tipo } = data;
        const { position, height, width, zIndex, marginTop, bottom, right } = params;

        let contendedor_iframe                      = document.getElementsByClassName(tipo);
        let iframe                                  = contendedor_iframe[0].getElementsByTagName('iframe');

        contendedor_iframe ? 
            (contendedor_iframe[0].style.position   = position          || null,
            contendedor_iframe[0].style.height      = height            || null,
            contendedor_iframe[0].style.width       = width             || null,
            contendedor_iframe[0].style.zIndex      = zIndex            || null,
            contendedor_iframe[0].style.marginTop   = marginTop         || null,
            contendedor_iframe[0].style.bottom      = bottom            || null,
            contendedor_iframe[0].style.right       = right             || null) 
            : false;
        /* /Contedor iframe*/

        /*Iframe*/
            iframe ?  
           (iframe[0].style.position              = position           || null,
            iframe[0].style.height                 = height            || null,
            iframe[0].style.width                  = width             || null,
            iframe[0].style.zIndex                = zIndex             || null,
            iframe[0].style.marginTop              = marginTop         || null,
            iframe[0].style.right                   = right            || null ) 
           : false;
        /* /Iframe*/

    }