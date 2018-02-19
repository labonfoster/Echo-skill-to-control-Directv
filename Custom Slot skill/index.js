var http = require('http'); // if going through a proxy that uses SSL change to "require('https');"
var path = ''; //assign variable for path
// Your external IP. Alexa can only access publically-accessible IPs. No LAN access unfortunately.
// Make sure to set up port forwarding on port 8080 to your DTV's IP on your router.
// In my case I had to move receiver to DMZ
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var wan_ip = '2600:1702:1390:5ce0:1934:463f:ff00:c281';
//externalIP or FQDN //////////////////////////////////////////////////////////////////////////
//var wan_ip = '<some fqdn>';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * App ID for the skill
 */
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var APP_ID = "amzn1.ask.skill.bc0bcc03-5c59-4987-b0f0-6cf8d47da881"; 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
* The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');
   
var DTVControl = function () {
    AlexaSkill.call(this, APP_ID);
};


// Extend AlexaSkill
DTVControl.prototype = Object.create(AlexaSkill.prototype);
DTVControl.prototype.constructor = DTVControl;

//Ignore Certificate errors if using HTTPS communication
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

DTVControl.prototype.intentHandlers = {
        DirectvIntent: function (intent, session, response) {
        
        //No matter what she wants to tell you her opinion.
        
        function satisfyAlexa() {
                        response.tell("OK");
                        };
        
        // Obtain User Intent
        switch(intent.slots.Control.value) {
                
                // Same button is used
				case "play":
				case "resume":
                      path = '/remote/processKey?key=play&hold=keyPress';
                break;
           
				case "pause":
				case "freeze":
                       path = '/remote/processKey?key=pause&hold=keyPress';
                break;
				
				case "guide":
                        path = '/remote/processKey?key=guide&hold=keyPress'
                break;
				
				case "power":
                        path = '/remote/processKey?key=power&hold=keyPress';
                break;
				
				case "format":
                       path = '/remote/processKey?key=format&hold=keyPress';
                break;
	
				case "rewind":
                       path = '/remote/processKey?key=rew&hold=keyPress';
                break;
				
				case "replay":
                         path = '/remote/processKey?key=replay&hold=keyPress';
                break;
				
				case "stop":
                          path= '/remote/processKey?key=stop&hold=keyPress';
                break;
				
				case "advance":
                                path= '/remote/processKey?key=advance&hold=keyPress';
                break;
				
				case "fast forward":
                                path = '/remote/processKey?key=ffwd&hold=keyPress';
                break;
		
				case "record":
				case "save":
                                path = '/remote/processKey?key=record&hold=keyPress';
                break;
				
				case "active":
                                path= '/remote/processKey?key=active&hold=keyPress';
                break;
				
				case "list":
				case "recorded shows":
				case "DVR":
                                path = '/remote/processKey?key=list&hold=keyPress';
                break;
				
				case "exit":
				case "end":
				case "leave":
                                path = '/remote/processKey?key=exit&hold=keyPress';
                break;
				
				case "back":
                                path= '/remote/processKey?key=back&hold=keyPress';
                break;
				
				case "menu":
                                path = '/remote/processKey?key=menu&hold=keyPress';
                break;
				
				case "info":
                                path= '/remote/processKey?key=info&hold=keyPress';
                break;
				
				case "up":

                                path = '/remote/processKey?key=up&hold=keyPress';
                break;
				
				case "down":
                                path = '/remote/processKey?key=down&hold=keyPress';
                break;

				case "left":
                                path= '/remote/processKey?key=left&hold=keyPress';
                break;
			
				case "right":
                                path= '/remote/processKey?key=right&hold=keyPress';
                break;
				
				case "select":
				case "enter":
                                path=  '/remote/processKey?key=select&hold=keyPress';
                break;
				
				case "channel up":
				case "page up":
                                path= '/remote/processKey?key=chanup&hold=keyPress';
                break;
				
				case "channel down":
				case "page down":
                     path = '/remote/processKey?key=chandown&hold=keyPress';
                break;
				
				case "previous":

					path= '/remote/processKey?key=prev&hold=keyPress';
                break;
			
				case "CNN":
					path = '/tv/tune?major=202';
                
				break;
				
				case "CBS":
					path = '/tv/tune?major=391';
					
				break;
				
				case "ABC":
					path = '/tv/tune?major=397';
                
				break;
				
				case "amc":
					path = '/tv/tune?major=254';
                
				break;
				
				case "animal planet":
					path = '/tv/tune?major=282';
                
				break;
				
				case "b.e.t.":
				case "BET":
				case "bet":
					path = '/tv/tune?major=329';
                
				break;
				
				case "bravo":
					path = '/tv/tune?major=237';
                
				break;
				
				case "comedy central":
					path = '/tv/tune?major=249';
                
				break;
				
				case "c span":
				case "C span":
					path = '/tv/tune?major=250';
                
				break;
				
				case "cartoon network":
					path = '/tv/tune?major=296';
                
				break;
				
				case "discovery":
					path = '/tv/tune?major=278';
                
				break;
				
				case "Disney channel":
					path = '/tv/tune?major=290';
                
				break;
				
				case "Disney junior":
					path = '/tv/tune?major=289';
                
				break;
				
				case "Disney xD":
				case "Disney x.d.":
					path = '/tv/tune?major=292';
                
				break;
				
				case "food network":
					path = '/tv/tune?major=231';
                
				break;
				
				case "fox news":
					path = '/tv/tune?major=360';
                
				break;
				
				case "fox":
					path = '/tv/tune?major=360';
                
				break;
				
				case "fx":
					path = '/tv/tune?major=248';
                
				break;
				
				case "h.g.t.v.":
				case "hgtv":
				case "HGTV":
					path = '/tv/tune?major=229';
                
				break;
				
				case "history channel":
					path = '/tv/tune?major=269';
                
				break;
				
				case "lifetime":
					path = '/tv/tune?major=252';
                
				break;
				
				case "MSNBC":
					path = '/tv/tune?major=356';
                
				break;
				
				case "MTV":
					path = '/tv/tune?major=331';
                
				break;
				
				case "MTV 2":
					path = '/tv/tune?major=333';
                
				break;
				
				case "national geographic":
					path = '/tv/tune?major=276';
                
				break;
				
				case "nick junior":
					path = '/tv/tune?major=301';
                
				break;
				
				case "spike":
					path = '/tv/tune?major=241';
                
				break;

				case "syfy":
					path = '/tv/tune?major=244';
                
				break;
				
				case "TBS":
				case "t.b.s.":
				case "tbs":
					path = '/tv/tune?major=247';
                
				break;
				
				case "TNT":
					path = '/tv/tune?major=245';
                
				break;
			
				case "true TV":
					path = '/tv/tune?major=246';
                
				break;
				
				case "vh 1":
					path = '/tv/tune?major=335';
                
				break;
				
				case "ESPN":
					path = '/tv/tune?major=206';
                
				break;
				
				case "ESPN 2":
					path = '/tv/tune?major=209';
                
				break;
				
				case "NBC sports":
					path = '/tv/tune?major=220';
                
				break;
				
				case "NBC":
					path = '/tv/tune?major=393';
                
				break;
				
				case "fox sports":
					path = '/tv/tune?major=219';
                
				break;
				
        
				
				default:
                
                        if (! isNaN(intent.slots.Channel.value) ) {

                 path = '/tv/tune?major=' + intent.slots.Channel.value  ;

              }
                else {
                response.tell("I didn't understand.");}
        break;

				
        } 
		var options = {
                     host: wan_ip,
                     port: 8080, // default port for DTV interface
                     path: '' + path, // Modify if path is prefixed 
                     method: 'GET' //, //(remove first comment slashes if using the "auth" option below)
					 // auth: 'username:password' // this is used if going through authenticated proxy (this is BASIC AUTH)
                    };
          var req = http.request(options, satisfyAlexa);
          req.end();						
        }
}


exports.handler = function (event, context) {
       
        var dtvControl = new DTVControl();
        dtvControl.execute(event, context);
        
};
