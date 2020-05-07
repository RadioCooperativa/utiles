let flag_       = false;
let ventana_    = $(window);
let flagSkin    = false;
let flagItt     = false;
let flagNot     = false;
let flagVideo   = false;
let flagNotSafe  = false;
let plataforma  = detectmob();
let protocol    = window.location.protocol;
let hostname    = window.location.hostname ;
let site        = protocol + '//' + hostname;

(function() {
    init();
})();

function init (){
    const windowEvent       = addEventListener('message', procesarMensaje, false);

        if(window.addEventListener)
            {
                windowEvent;
            }else if(window.onmessage){
                procesarMensaje            
            }
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

function hideWindow(plataforma) {
    
        if(plataforma === 1){
            document.getElementById("coop_m_1x1_1").style.display="none";
            flagSkin = true;
            }else{ 
                if(plataforma === 0){
                    document.getElementById("coop_d_1x1_1").style.display="none";
                    flagSkin = true;
                    }  
            }      
}

function procesarMensaje(e) {

        const { data } = e;
        const { mensaje, cerrar } = data;

        if(e.origin.startsWith('https://tpc.googlesyndication.com') || e.origin.startsWith(site)){
            console.log("procesarMensaje entro");
            console.log("procesarMensaje e.data.cmd: ",e.data.cmd);

            if(e.data.cmd === 'safe-frame'){
                console.log("procesarMensaje mensaje: ",mensaje);
                if(mensaje){
                    if(cerrar === 1){hideWindow(plataforma);}
                        if (!cerrar && mensaje !== 'itt' && mensaje !== 'newItt'){
                                switch (mensaje){
                                    case('skin'):
                                        procesaSkin(data);
                                        flagVideo = true;
                                        instanciaFormatVideoAds(cerrar);
                                    break;
                                    case ('expandible'):
                                        procesaExpandible(data);   
                                        flagVideo = true;
                                        instanciaFormatVideoAds(cerrar);
                                    break;                                  
                                    } 
                                }else{
                                        switch (mensaje){
                                            case ('itt'):
                                                flagVideo = true;
                                                procesaFrame(data);
                                            break;
                                            case('newItt'):
                                                flagVideo = true;
                                                procesaFrame(data);
                                            break;
                                            case ('footer'):
                                                flagVideo = true;
                                                procesaFrame
                                            break;
                                        }   
                                    }
                }else{
                    if(!flagVideo){
                        console.log("flagVideo: ",flagVideo);
                        instanciaFormatVideoAds(cerrar);
                    }
            } 
        }else{
            setTimeout(function() {
                console.log("notFrame flagVideo: ",flagVideo)
                console.log("notFrame flagNot: ",flagNot)
                if(!flagVideo){
                    instanciaFormatVideoAds(cerrar);
                }
            }, 1000);
           
        }
    }                                
}

function instanciaFormatVideoAds(cerrar){
    console.log("instanciaFormatVideoAds plataforma: ",plataforma);
    console.log("instanciaFormatVideoAds coop_dfp_tipo: ",coop_dfp_tipo);
    
    if(plataforma === 1){
        if (!flagNot){
            switch (true){
                case (coop_dfp_tipo.indexOf('portada') !== -1):
                        flagNot = true;
                        go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_m_preroll_home_stiky&description_url=http%3A%2F%2Fwww.cooperativa.cl&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',[null], [null], [null]);
                break;
                case(coop_dfp_tipo.indexOf('portadilla') !== -1):
                        flagNot = true;
                        go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_m_preroll_home_stiky&description_url=http%3A%2F%2Fwww.cooperativa.cl&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',[null], [null], [null]);
                break;
                case(coop_dfp_tipo.indexOf('mam') !== -1):
                        flagNot = true;
                        go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_m_preroll_home_stiky&description_url=http%3A%2F%2Fwww.cooperativa.cl&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',[null], [null], [null]);
                break;
                case(coop_dfp_tipo.indexOf('articulo') !== -1):
                        if(coop_fid_){
                            flagNot = true;
                            go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_m_preroll_home_stiky&description_url=http%3A%2F%2Fwww.cooperativa.cl&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',arraySeccion, arrayTem, arrayStem); 
                        }
                        flagNot = true;
                        go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_m_preroll_inread&description_url=https%3A%2F%2Fwww.cooperativa.cl%2F&tfcd=0&npa=0&sz=640x360&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',arraySeccion, arrayTem, arrayStem); 
                break;
            }
        }
    }else if(plataforma === 0){
        if (!flagNot){
            
            switch (true){
                case (coop_dfp_tipo.indexOf('portada') !== -1):
                    flagNot = true;
                    go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_d_preroll_home_stiky&description_url=http%3A%2F%2Fwww.cooperativa.cl&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',[null], [null], [null]);
                break;
                case(coop_dfp_tipo.indexOf('portadilla') !== -1):
                    flagNot = true;
                    go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_d_preroll_home_stiky&description_url=http%3A%2F%2Fwww.cooperativa.cl&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',[null], [null], [null]);
                break;
                case(coop_dfp_tipo.indexOf('mam') !== -1):
                    flagNot = true;
                    go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_d_preroll_home_stiky&description_url=http%3A%2F%2Fwww.cooperativa.cl&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',[null], [null], [null]);
                break;
                case(coop_dfp_tipo.indexOf('articulo') !== -1):
                    if(coop_fid_){
                        flagNot = true;
                        go('https://pubads.g.doubleclick.net/gampad/ads?iu=/1020719/coop_d_preroll_home_stiky&description_url=http%3A%2F%2Fwww.cooperativa.cl&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',arraySeccion, arrayTem, arrayStem); 
                    }
                    flagNot = true;
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

    iframe ?  
         (iframe[0].style.height                 = height             || null,
         iframe[0].style.width                   = width              || null) 
    : false;

    googletag.pubads().addEventListener('slotOnload', function(event) {

        window.addEventListener('scroll', function(e) {
          scroll_position = window.scrollY; 
          if(scroll_position >= 600){
                if(plataforma){
                    hideWindow(plataforma);
                }else{
                    hideWindow(plataforma);  
                }
          }          
      });
      if(event.slot.getSlotElementId() === "coop_d_1x1_1" ){
          }else{ 
              if(event.slot.getSlotElementId() === "coop_m_1x1_1") {
                document.getElementById("div-gpt-ad-1530907736655-2").style.display="none";     
              }
            }
        });
}

function procesaFrame(data){

        const { timeOut, cerrar, mensaje} = data;
            console.log("procesaFrame cerrar: ",cerrar);
            console.log("procesaFrame mensaje: ",mensaje);
            console.log("procesaFrame flagItt: ",flagItt);

            if(!flagItt){
                if (cerrar === 1){
                    flagItt = true;
                    hideWindow(plataforma);
                    instanciaFormatVideoAds(cerrar);
                }else if(mensaje === 'itt'){
                    if (timeOut){
                        setTimeout(function() {dibujaItt(data)}, 1000 * timeOut);
                    }
                }else if(mensaje === 'newItt'){
                    procesaNewItt(data);
                }else if(mensaje === 'footer'){
                    if (timeOut){
                        setTimeout(function() {dibujaFooter(data)}, 1000 * timeOut);
                    }
                }
            }
}

function dibujaItt(data){

        const { params, tipo} = data;
        const { position, height, width, zIndex, display, marginTop, top, left, bottom } = params;

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

        iframe ?  
             (iframe[0].style.position              = position          || null,
             iframe[0].style.height                 = height            || null,
             iframe[0].style.width                  = width             || null,
             iframe[0].style.display                = display           || null,
             iframe[0].style.top                    = top               || null,
             iframe[0].style.left                   = left              || null ) 
        : false;
}

function procesaSkin(data){
        
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

        iframe ?  
            (iframe[0].style.height                 = height            || null,
            iframe[0].style.width                   = width             || null
            ): false;            
        
        style.appendChild(document.createTextNode(style_tag));
        document.getElementsByTagName('body')[0].appendChild(style);  
}

function dibujaFooter(data){

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

        iframe ?  
           (iframe[0].style.position              = position           || null,
            iframe[0].style.height                 = height            || null,
            iframe[0].style.width                  = width             || null,
            iframe[0].style.zIndex                = zIndex             || null,
            iframe[0].style.marginTop              = marginTop         || null,
            iframe[0].style.right                   = right            || null ) 
           : false;
}