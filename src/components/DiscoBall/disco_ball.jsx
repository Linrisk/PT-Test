<div
        style={{
          display: toggleDisplay,
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: color,
          width: "100%",
          height: "100%",
          zIndex: 10,
          flexDirection: "column",
          paddingVertical: "10vh",
        }}
      >
        <div>
          <div className={`popup ${isOpen ? "open" : ""}`}>
            <div className="popup-content">
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 80 }}
                animate="show"
                style={{
                  height: "20%",
                  backgroundColor: 'rgba(254, 255, 255,0.9)',
                  alignItems:'center',
                  justifyContent:'center',
                  textAlign:'center',
                  width: "100%",
                  padding:"2%",
                  borderRadius: "1vh",
                }}
                id="welcomeExperienceDisco"
              >
                <h1 style={{ fontSize: 15, fontFamily: '"Barlow", sans-serif !important',
                textAlign:'left',
                padding:'2%',
  fontWeight:' 800 !important',
  letterSpacing: '3px',
  fontStyle: 'normal !important'}}>
                  Bienvenue dans l'experience Disco.... 🥳
                </h1>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1}}
                transition={{ type: "spring", stiffness: 300, damping: 80 }}
                animate="show"
                style={{
                  backgroundColor: "rgb(40,40,40) !important",
                  width: "100%",
                  borderRadius: "1vh",
                }}
                id="spotifyFrame"
              >
                <iframe
                  style={{ borderRadius: "12px",backgroundColor:'transparent !important'}}
                  src="https://open.spotify.com/embed/playlist/0uRbSuPcbICYaXnD5oYQCl?utm_source=generator&theme=0"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowfullscreen="true"
                 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>

              </motion.div>
              <motion.div
              
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 80 }}
              animate="show"
                onClick={closePopup}
                style={{
                  height: "15%",
                  backgroundColor: 'rgba(254, 255, 255,0.9)',
                  alignItems:'center',
                  justifyContent:'space-evenly',
                  flexDirection:'row',
                  textAlign:'center',
                  width: "100%",
                  padding:"2%",
                  borderRadius: "1vh",
                fontSize: 15, fontFamily: '"Barlow", sans-serif !important',
                textAlign:'left',
                display:'flex',
  fontWeight:' 800 !important',
  letterSpacing: '3px',
  fontStyle: 'normal !important'
                }}
                id="closeExperienceDisco"
              >
                <ImCross style={{color:'red'}}/>
                <h1 style={{ fontSize: 15, fontFamily: '"Barlow", sans-serif !important',
                textAlign:'left',
                margin:0,
  fontWeight:' 800 !important',
  letterSpacing: '3px',
  fontStyle: 'normal !important'}}>
                  Quitter l'experience disco
                </h1>
                <ImCross style={{color:'red'}}/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>



<motion.div
whileHover={{ scale: 1.3 }}
transition={{ type: "spring", stiffness: 300, damping: 120 }}
style={{
  height: "10vh",
  width: "10vh",position:'absolute',
bottom: "1.5%",
left:"1.5%",
  borderRadius: "100%",
  marginLeft: "0px",
  backgroundPosition: "center",
  backgroundSize: "120%",
}}
onClick={() => {
  handleClick();
  setIsOpen(true);
  setIsOpen(true);
  setToggleDisplay("flex");
}}
>
<button class="disco-ball-button" style={{}}>
  <span class="disco-ball-icon" style={{}}></span>
</button>
</motion.div>



<Row
style={{
  display: "flex",
  flexDirection: "column",
  width: "80%",
  height: "15%",
  textAlign: "left",
  alignItems: "left",
}}
>
<button
  id="btn-instagram"
  onClick={() =>
    window.location.replace("https://www.instagram.com/linriskk/")
  }
>
  Instagram
</button>
<button
  id="btn-artstation"
  onClick={() =>
    window.location.replace("https://www.artstation.com/linrisk")
  }
  style={{ marginLeft: "2%" }}
>
  ArtStation
</button>
</Row>