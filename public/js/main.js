// ============================================================================//
// ============================================================================//
// ===================== START OF THE FIRST CICLE OF THE CODE =================//
// ============================================================================//
// ============================================================================//

// We hide the element .searchTagsWrapper
$('.searchTagsWrapper').hide();

// Initialize the card/event array and the card/event pagination
var theCards = new Array();
var currentPage = 0,
    numberPerPage = 0,
    apiCallTrunc,
    apiCallData;
    
// We set the API link to call 
var apiLink = 'https://api.servethemoment.org/prod/'; 

// We make the API call to pull the data
var apiCall = $.getJSON(`${apiLink}`, function(data) {
    console.log(data);
}).done(function(data, theCards, datesLoop) {
    // We initialize the variables
    TimeRange = false;
    localStorage.clear();
    apiCallData = new Array();
    apiCallTrunc = new Array();
    var defaultEventImage = "https://werepair.org/wp-content/uploads/2017/08/logo1-1.png";
    
    // We Declare The Arrays for the select inputs
    var issueElements = new Array();
    var contextElemtents = new Array();
    var datetElemtents = new Array();
    var cityElements = new Array();
    var partnerElements = new Array();

    // We create an array for the dates we are going to loop
    var  datesLoop = new Array();

    // We loop trought the initial data to curate the data and create a new array
    for (let index = 0; index < data.length; index++) {
        var element = data[index];

        if(element.Context__c === '' || element.Context__c === null || element.Context__c === undefined){
            element.Context__c = 'Uncategorized';
        }
        if(element.Issue_Area__c === '' || element.Issue_Area__c === null || element.Issue_Area__c === undefined){
            element.Issue_Area__c = 'Other interests';
        }
        if(element.Repair_City__c === '' || element.Repair_City__c === null || element.Repair_City__c === undefined){
            element.Repair_City__c = 'Global';
        }
        if(element.Repair_City__c.includes('Nat')){
            element.Repair_City__c = 'Global';
        }
        if(element.Repair_City__c === 'NYC' ){
            element.Repair_City__c = 'ny';
        }
        if(element.Repair_City__c === 'New York City' ){
            element.Repair_City__c = 'ny';
        }
        if(element.Repair_City__c === 'Serve the Moment Miami' ){
            element.Repair_City__c = 'miami';
        }
        if(element.Repair_City__c === 'Serve the Moment Pittsburgh' ){
            element.Repair_City__c = 'pittsburgh';
        }
        if(element.Repair_City__c === 'Serve the Moment Baltimore' ){
            element.Repair_City__c = 'baltimore';
        }
        if(element.Repair_City__c === 'Serve the Moment Chicago' ){
            element.Repair_City__c = 'chicago';
        }
        if(element.Repair_City__c === 'Serve the Moment Atlanta' ){
            element.Repair_City__c = 'atlanta';
        }
        if(element.Repair_City__c === 'Serve the Moment Denver' ){
            element.Repair_City__c = 'denver';
        }
        if(element.Repair_City__c === 'Serve the Moment Boston' ){
            element.Repair_City__c = 'boston';
        }
        if(element.Repair_City__c === 'Serve the Moment Bay Area' ){
            element.Repair_City__c = 'bay area';
        }
        if(element.Repair_City__c === 'Serve the Moment Cleveland' ){
            element.Repair_City__c = 'cleveland';
        }
        if(element.Repair_City__c === 'Serve the Moment Detroit' ){
            element.Repair_City__c = 'detroit';
        }
        if(element.Repair_City__c === 'Serve the Moment Los Angeles' ){
            element.Repair_City__c = 'los angeles';
        }
        if(element.date === '' || element.date === null || element.date === undefined){
            element.date = new Date();
        }
        if(element.Form_to_Embed__c === '' || element.Form_to_Embed__c === null || element.Form_to_Embed__c === undefined){
            element.Form_to_Embed__c = 'No Form';
        }
        if(element.Registration_Form_for_Website__c === '' || element.Registration_Form_for_Website__c === null || element.Registration_Form_for_Website__c === undefined){
            element.Registration_Form_for_Website__c = 'No Form';
        }
        if(element.Issue_Area__c === '' || element.Issue_Area__c === null || element.Issue_Area__c === undefined){
            element.Issue_Area__c = 'Other interests';
        }
        if(element.Programming_Partner_Name__c === '' || element.Programming_Partner_Name__c === null || element.Programming_Partner_Name__c === undefined){
            element.Programming_Partner_Name__c = 'Other';
        }
        if(element.Registration_Email__c === '' || element.Registration_Email__c === null || element.Registration_Email__c === undefined){
            element.Registration_Email__c = 'info@werepair.org';
        }
        if(element.Display_Name__c === '' || element.Display_Name__c === null || element.Display_Name__c === undefined){
            element.Display_Name__c = 'Title is not available';
        }
        if(element.Promotional_Text__c === '' || element.Promotional_Text__c === null || element.Promotional_Text__c === undefined){
            element.Promotional_Text__c = 'No description available';
        }
        if(element.RecordTypeId === '' || element.RecordTypeId === null || element.RecordTypeId === undefined){
            element.RecordTypeId = 'No ID';
        }
        if(element.Registration_Type__c === '' || element.Registration_Type__c === null || element.Registration_Type__c === undefined){
            element.Registration_Type__c = 'N/A';
        }
        if(element.Partner_Registration_Link__c === '' || element.Partner_Registration_Link__c === null || element.Partner_Registration_Link__c === undefined){
            element.Partner_Registration_Link__c = 'noLink';
        }
        if(element.Venue_Account_Name__c === '' || element.Venue_Account_Name__c === null || element.Venue_Account_Name__c === undefined){
            element.Venue_Account_Name__c = '';
        }
        if(element.Venue_Billing_City__c === '' || element.Venue_Billing_City__c === null || element.Venue_Billing_City__c === undefined || element.Venue_Billing_City__c === false){
            element.Venue_Billing_City__c = false;
        }
        if(element.Venue_Billing_Street__c === '' || element.Venue_Billing_Street__c === null || element.Venue_Billing_Street__c === undefined){
            element.Venue_Billing_Street__c = '';
        }
        if(element.Venue_Billing_State__c === '' || element.Venue_Billing_State__c === null || element.Venue_Billing_State__c === undefined){
            element.Venue_Billing_State__c = '';
        }
        if(element.Venue_Billing_Zip_Code__c === '' || element.Venue_Billing_Zip_Code__c === null || element.Venue_Billing_Zip_Code__c === undefined){
            element.Venue_Billing_Zip_Code__c = '';
        }
        if(element.Description === '' || element.Description === null || element.Description === undefined){
            element.Description = 'Currently this event has no description';
        }
        if(element.Image_URL__c === '' || element.Image_URL__c === null || element.Image_URL__c === undefined){
            element.Image_URL__c = defaultEventImage;
        }else if(element.Image_URL__c.includes("drive.google.com")){
            element.Image_URL__c = element.Image_URL__c.replace(/\https:\/\/drive.google.com\/file\/d\//g, '');
            element.Image_URL__c = element.Image_URL__c.replace(/\/view\?usp=sharing/g, '');
            element.Image_URL__c = `https://drive.google.com/thumbnail?id=${element.Image_URL__c}`;
        }
        if(element.RecordTypeId === '' || element.RecordTypeId === null || element.RecordTypeId === undefined){
            element.RecordTypeId = 'No ID';
        }
        if(element.Start_Time__c === '' || element.Start_Time__c === null || element.Start_Time__c === undefined){
            element.Start_Time__c = 'no-time';
        }
        if(element.End_Time__c === '' || element.End_Time__c === null || element.End_Time__c === undefined){
            element.End_Time__c = 'no-time';
        }
        if(element.Program_Time_Zone__c === '' || element.Program_Time_Zone__c === null || element.Program_Time_Zone__c === undefined){
            element.Program_Time_Zone__c = '';
        }
        if(element.Virtual_Program__c){
            element.Context__c = element.Context__c+";"+"Virtual"
        }
        if(element.Ongoing_Program__c){
            element.Context__c = element.Context__c+";"+"Ongoing"
        }

        if(element.External_Site_URL__c){
            if(element.External_Site_URL__c.length <= 0){
                element.External_Site_URL__c = '';
            }else{
                if(element.External_Site_URL__c.includes("</a>")){
                    element.External_Site_URL__c = element.External_Site_URL__c.split('"')[1];
                }
            }
        }
        
        // We create a new event object with the curated data
        var event = {
            record : element.RecordTypeId,
            context : element.Context__c  , 
            issue: element.Issue_Area__c  , 
            city:  element.Repair_City__c , 
            date :  element.StartDate ,
            startAt :  element.Start_Time__c ,
            endAt :  element.End_Time__c ,
            id : element.Id  , 
            form : element.Form_to_Embed__c, 
            communityID :  element.Community_Id__c,
            imageUrl : element.Image_URL__c, 
            formURL : element.Registration_Form_for_Website__c, 
            issue : element.Issue_Area__c, 
            registratioEmail : element.Registration_Email__c, 
            name : element.Display_Name__c, 
            promo : element.Promotional_Text__c, 
            record : element.RecordTypeId, 
            registrationType : element.Registration_Type__c,
            city : element.Repair_City__c,
            partnerLink : element.Partner_Registration_Link__c, 
            partner: element.Programming_Partner_Name__c,
            venue : element.Venue_Account_Name__c, 
            description : element.Description,
            isOngoing: element.Ongoing_Program__c,
            isVirtual: element.Virtual_Program__c,
            timeZone: element.Program_Time_Zone__c, 
            serveLink : element.External_Site_URL__c,
        }

        // We check if the event contains the virtual field and based on that we change the full address
        if(event.isVirtual){
            var fullAddress = `Virtual`; 
        }else{
            var fullAddress = `${event.venue} <br>${element.Venue_Billing_Street__c?`${element.Venue_Billing_Street__c}<br>`: ''}${element.Repair_City__c?`${element.Repair_City__c}`:''}${element.Venue_Billing_State__c?`${'     '+element.Venue_Billing_State__c}`:''}${', '+element.Venue_Billing_Zip_Code__c}`;
        }
        
        // If the event contains the Global field, then the full address will be global
        if(event.city === "Global" && !event.isVirtual){
            var fullAddress = "Global";
        }

        // We create a variable that will get the city field value, clean empty spaces and lowecase it
        var filterCity = event.city.replace(/ /g,'')
                                    .replace(/,/g,'')
                                    .replace(/\//g,'')
                                    .replace(/'/g,'')
                                    .replace(/!/g,'')
                                    .replace(/-/g,'')
                                    .replace(/\./g,'')
                                    .toLowerCase();

        // We create a variable that will get the issue field value, clean empty spaces and lowecase it
        var filterIssue = event.issue.replace(/ /g,'')
                                     .replace(/,/g,'')
                                     .replace(/\//g,'')
                                     .replace(/'/g,'')
                                     .replace(/!/g,'')
                                     .replace(/-/g,'')
                                     .replace(/\./g,'')
                                     .toLowerCase();

        var filterPartner = event.partner.replace(/ /g,'')
                                         .replace(/,/g,'')
                                         .replace(/\//g,'')
                                         .replace(/'/g,'')
                                         .replace(/!/g,'')
                                         .replace(/-/g,'')
                                         .replace(/\//g,'')
                                         .replace(/\./g,'')
                                         .toLowerCase();

        // We update the event data with the curated fields data
        event.filterCity = filterCity;
        event.filterIssue = filterIssue;
        event.fullAddress = fullAddress;
        event.filterPartner = filterPartner;
        event.filterContext = new Array();
        
        // If the context field contains a ";" separator we will split the values and save them as each
        if(event.context.includes(";")){
            var explodedString = event.context.split(";");
            // Display array values on page
            for(var i = 0; i < explodedString.length; i++){
                if(explodedString[i].includes('Family') || explodedString[i].includes('Teen') || explodedString[i].includes('MLK') || explodedString[i].includes('Ongo')  || explodedString[i].includes('Virt')){
                    if(explodedString[i].includes('Fam')){
                        explodedString[i] = 'Families';
                    }
                    var filterContextInfo = explodedString[i].replace(/ /g,'')
                                                             .replace(/,/g,'')
                                                             .replace(/\//g,'')
                                                             .replace(/'/g,'')
                                                             .replace(/!/g,'')
                                                             .replace(/-/g,'')
                                                             .replace(/\./g,'')
                                                             .toLowerCase();
                    
                    event.filterContext.push(filterContextInfo);
                    contextElemtents.push(explodedString[i]);

                } else{
                    event.filterContext.push('');
                }
            }
        }else{
            if(event.context.includes('Fam') || event.context.includes('Teen') || event.context.includes('MLK') || event.context.includes('Ongo')  || event.context.includes('Virt')){
                if(event.context.includes('Fam')){
                    delete event.context;
                    event.context = 'Families';
                }
                var contextFilter = event.context;
                contextFilter = contextFilter.replace(/ /g,'')
                                              .replace(/,/g,'')
                                              .replace(/\//g,'')
                                              .replace(/'/g,'')
                                              .replace(/!/g,'')
                                              .replace(/-/g,'')
                                              .replace(/\./g,'')
                                              .toLowerCase();

                event.filterContext.push(contextFilter);
                contextElemtents.push(event.context);
            }  
        }

        // We add the cities to the select field options
        cityElements.push(event.city);
    
        // If issue area its other we will include it
        if(!event.issue.includes('Other')){
            issueElements.push(event.issue);
        }

        // If partner area its other we will include it
        if(!event.partner.includes('Other')){
            partnerElements.push(event.partner);
        }

        // We set the current date Array
        date = new Date(event.date);
        date = new Date(date.getTime() + Math.abs(date.getTimezoneOffset()*60000) ) ;
        day = date.getDate(); // we get the day based on the date
        year = date.getFullYear(); // we get the full year based on the date

        var today = new Date(); // We get todays date to compare

        // We will transform the date into a readable and comparable date format
        function tranformMonth(date){
            month = date.getMonth();
            month =  month +1;
            return (month);
        }; 

        month = tranformMonth(date);
        if(month < 10){
            month = '0'+month;
        }

        if(day < 10){
            day = '0'+day;
        }

        // We set the hours of both date to 0 so we can compare them
        date.setHours(0,0,0,0);
        today.setHours(0,0,0,0);

        // We add the final date into the array of date we are goint to loop
        var finalDate = new Object();
            finalDate.unformat = date;
            finalDate.value = `${month}-${day}-${year}`;
            finalDate.year = `${year}`;
        if(date){
            datesLoop.push(finalDate);
        }

        event.formatDate = finalDate.value;
        event.unformatDate = finalDate.unformat;
        
        // We add the event into our array apiCallData
        apiCallData.push(event);
    }

    // After popuplating all date we are going to remove duplicated elements from the arrays
    issueElements = [...new Set(issueElements)];
    datetElemtents = [...new Set(datetElemtents)];
    contextElemtents = [...new Set(contextElemtents)];
    cityElements = [...new Set(cityElements)];  
    partnerElements = [...new Set(partnerElements)];  

    // we sor the events alphabetically and the dates from older to newer
    issueElements.sort(); 
    datetElemtents.sort(); datetElemtents.reverse(); 
    cityElements.sort(); 
    contextElemtents.sort();
    partnerElements.sort();  

    // We loop trought Issue options and add them to the DOM
    for (let index = 0; index < issueElements.length; index++) {
        var option = issueElements[index];
        // Save the info on a variable
        let finalOption = option;
        // Clean, remove spaces and lowercase the info
        finalOption = finalOption.replace(/ /g, '').replace(/,/g, '').replace(/-/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').toLowerCase(); 
        // Create the option with JS
        let theOption = `<option id="${finalOption}-${index}" value="${finalOption}" class="${finalOption}">${option}</option>`;
        // Insert the option into the html
        if(!$(`#${finalOption}-${index}`).length){   
            $( "#interest" ).append(theOption);
        }
    }

    // We loop trought partner options and add them to the DOM
    for (let index = 0; index < partnerElements.length; index++) {
        var option = partnerElements[index];
        // Save the info on a variable
        let finalOption = option;
        // Clean, remove spaces and lowercase the info
        finalOption = finalOption.replace(/ /g, '').replace(/,/g, '').replace(/-/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').toLowerCase(); 
        // Create the option with JS
        let theOption = `<option value="${finalOption}" id="${finalOption}-${index}" class="${finalOption}">${option}</option>`;
        // Insert the option into the html
        if(!$(`#${finalOption}-${index}`).length){
            $( "#partner" ).append(theOption);
        }
        
    }

    // We loop trought City options and fix some of the values
    for (let index = 0; index < cityElements.length; index++) {
        var element = cityElements[index];
        
        if(element === 'Other'){
            cityElements.push(cityElements.splice(index, 1)[0]);
        }

        if( element === 'Harlem'){
            cityElements.splice(index,1);
        }else if( element === 'Brooklyn'){
            cityElements.splice(index,1);
            cityElements.push('New York');
        }else if( element === 'ny'){
            cityElements.splice(index,1);
            cityElements.push('New York');
        }
    }

    cityElements.sort();

    // We loop trought Issue options and add them to the DOM

    // for (let index = 0; index < cityElements.length; index++) {
    //     var option = cityElements[index];
    //     // Save the info on a variable
    //     let finalOption = option;
    //     if( finalOption === 'New York'){
    //         // Clean, remove spaces and lowercase the info
    //         finalOption = finalOption.replace(/ /g, '').replace(/,/g, '').replace(/-/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').toLowerCase(); 

    //         // Create the option with JS
    //         let theOption = `<option id="${finalOption}-${index}" data-option-count="${index}" value="nyc" class="${finalOption} ${finalOption}-${index}">New York</option>`;
    //         // Insert the option into the html
    //         if(!$(`#${finalOption}-${index}`).length){
    //             $( "#cities" ).append(theOption);
    //         }
    //     }else{
    //         // Clean, remove spaces and lowercase the info
    //         finalOption = finalOption.replace(/ /g, '').replace(/,/g, '').replace(/-/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').toLowerCase(); 

    //         // Create the option with JS
    //         let theOption = `<option id="${finalOption}-${index}" data-option-count="${index}" value="${finalOption}" class="${finalOption} ${finalOption}-${index}">${option}</option>`;
    //         // Insert the option into the html
    //         if(!$(`#${finalOption}-${index}`).length){
    //             $( "#cities" ).append(theOption);
    //         }
    //     }
    // }

    // We loop trought Context options and add them to the DOM
    for (let index = 0; index < contextElemtents.length; index++) {
        var option = contextElemtents[index];
        // Save the info on a variable
        let finalOption = option;
        // Clean, remove spaces and lowercase the info
        finalOption = finalOption.replace(/ /g, '').replace(/,/g, '').replace(/-/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/\//g, '').replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').toLowerCase(); 

        // Create the option with JS
        let theOption = `<label class="tag-checkbox ${finalOption}" for=""><input type="checkbox" id="${finalOption}-${index}" class="${finalOption}" value="${finalOption}" data-info="${option}"> <span> ${option}</span></label>`;
        // Insert the option into the html
        if(!$(`#${finalOption}-${index}`).length){
            $( ".issues__wrapper .select_options" ).append(theOption);
        }
        
    }
    
    // We convert the select elements with niceSelect library
    $('select').niceSelect();


    // We remove the repeated dates form our dates array and we sort them
    datesLoop  = [...new Set(datesLoop)];
    datesLoop.sort((a, b) => (a.unformat > b.unformat) ? 1 : -1)

    // We save on the localStorage our dates and our original returned and curated events because we are going to use them later on the app. 
    localStorage.setItem('dateRange', JSON.stringify(datesLoop));            
    localStorage.setItem('cards', JSON.stringify(apiCallData));
    
    setTimeout(function(){ 

        // We create what its going to be our array of card we are going to display
        var finalCardsArray =  new Array();
        
        // We call the formatDataEvents() function and return the results 
        finalCardsArray = formatDataEvents(apiCallData); 

        // We create a new date today and date range to do the dates comparations
        var todayDate = new Date();
        var finalRange = new Array();
        day = todayDate.getDate();
        year = todayDate.getFullYear();
        
        // We create the tranformMonth() function and call it below
        function tranformMonth(date){
            month = date.getMonth();
            month =  month +1;
            return (month);
        };

        month = tranformMonth(todayDate);
        if(month < 10){
            month = '0'+month;
        }
        if(day < 10){
            day = '0'+day;
        }

        // Because we are on the first loop the value of new date will be "no-date"
        var newDate = 'no-date';

        finalRange.push(newDate);

        var datesLoop = JSON.parse(localStorage.getItem('dateRange'));
        if(!datesLoop){
            localStorage.setItem('dateRange', JSON.stringify(finalRange));
        }

        // Set the array for the cards
        var list = finalCardsArray;

        // Create array of cards for carousel
        var carouselList = JSON.parse(localStorage.getItem('onGoingCards'));

        if($('.get_info')[0]){
            $('.get_info')[0].remove();
        }

        // Here we are going to create the pagination buttons and divide the events on pages.
        var pageList = new Array();
        var currentPage = 1;
        
        // Based on the screensize we set the amount of events per page.
        if($(window).width() > 500) {
            var numberPerPage = 8;
        }else{
            var numberPerPage = 2;
        }

        var numberOfPages = 0;

        function makeList() {
            numberOfPages = getNumberOfPages();
        } 
        function getNumberOfPages() {
            return Math.floor(list.length / numberPerPage);
        }
        function loadList() {
            var begin = ((currentPage - 1) * numberPerPage);
            var end = begin + numberPerPage;
            pageList = list.slice(begin, end);
            drawList(pageList);
            if($("[data-value='nyc']").length > 1){
                $("[data-value='nyc']")[0].remove();
            }
        }
            
        function drawList(pageList) {
            document.getElementById("list").innerHTML = "";
            // document.getElementById("carousel-list").innerHTML = "";
            document.getElementById("list_controller").innerHTML = "";

            for (r = 0; r < pageList.length; r++) {
                document.getElementById("list").innerHTML += pageList[r] ;
            }
            var cardExist = $('#full_ops .the-card');

            // var carouselList = JSON.parse(localStorage.getItem('onGoingCards'));
            // for (r = 0; r < carouselList.length; r++) {
            //     if(carouselList[r].includes('data-event-city="global"')){
            //         carouselList.push(carouselList.splice(r, 1)[0]);
            //     }
            // }
            // for (r = 0; r < carouselList.length; r++) {
            //     document.getElementById("carousel-list").innerHTML += carouselList[r] ;
            // }
            
            // var ongoingCardExist = $('#carousel-list .the-card'); 
            // if(ongoingCardExist.length > 0){
            //     var elem = document.querySelector('#carousel-list');
            //     var flkty = new Flickity( elem, {
            //         imagesLoaded: true,
            //         resize: true,
            //         adaptiveHeight: true,
            //         cellAlign: 'left',
            //         freeScroll: true,
            //         wrapAround: true,
            //         contain: true
            //     });
            // }

            // if($(window).width() > 768) {
            //     if($("#ongoing-carousel .the-card").length <= 3) {
            //             $("#carousel-list .flickity-prev-next-button.previous").addClass("disabled__arrow");
            //     }else{
            //         $("#carousel-list .flickity-prev-next-button.previous").removeClass("disabled__arrow");
            //     }

            //     if($("#ongoing-carousel .the-card").length <= 3) {
            //         $("#carousel-list .flickity-prev-next-button.next").addClass("disabled__arrow");
            //     }else{
            //         $("#carousel-list .flickity-prev-next-button.next").removeClass("disabled__arrow");
            //     }
            // }
        }

        function createButtons() {
            if($(window).width() > 500) {
                var buttons = Math.ceil(list.length / 8);
            }else{
                var buttons = Math.ceil(list.length / 3);
            }
            var buttonArray =  new Array();
            var activeButton = '';
            var theButton = '';
            number = 1;
            

            theButton = 
            `
            <li class="pointer-none  pagination-btn btn-index" data-page="${number}" data-total="${buttons}">${number}</li>
            <p>OF</p>
            <li class="pointer-none  pagination-btn btn-index" data-page="${buttons}" data-total="${buttons}">${buttons}</li>
            `;
    

            buttonArray.push(theButton);
            
            var nn = parseInt(number);

            var nextButton =  `
            <li tabindex="0" class="pagination-btn btn-index next-controller-button" aria-label="next page"  data-page="${nn}" data-total="${buttons}"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="7.27" height="12.722" viewBox="0 0 7.27 12.722">
                    <path id="Hover" d="M102.219,29.952l-4.887,4.739a.909.909,0,1,0,1.285,1.285l5.453-5.453a.907.907,0,0,0,0-1.284h0l-5.447-5.45a.91.91,0,0,0-1.29,1.285l4.887,4.879" transform="translate(-97.066 -23.52)" fill="#00a99e" fillRule="evenodd"/>
                </svg>
            </li>`;
                
            $( "#list_controller" ).append(buttonArray);

            if(buttons === 1){

            }else{
                $( "#list_controller" ).append(nextButton);
            }

        }
        function load() {
            makeList();
            loadList();
            createButtons(); 

            var remainTags = $('#searchTags li');
            if(remainTags.length === 0 ){
                $('.searchTagsWrapper').hide();
            }else{
                if(remainTags[0].innerText === "Issue x"){
                    setTimeout(function(){
                        if($(`[data-info=".-1"]`)[0]){
                            $(`[data-info=".-1"]`)[0].remove();
                            $('.searchTagsWrapper').hide();
                        }
                    }, 100)
                }
            }
        }
        
        load();

        function CreatePopupWithGet(){
            // This peace of code
            let popupId = window.location.href.split('popupId=')[1]; 
            if(popupId){
                if(popupId.length > 0){
                    if(popupId.substring(0, popupId.indexOf("#")).length > 0){
                        // We get only the ID
                        let trimmedId = popupId.substring(0, popupId.indexOf("#"));

                        // We check if the element exist on the DOM already
                        if($(`.the-card [data-event-id='${trimmedId}']`).length > 0) {
                            $(`.the-card [data-event-id='${trimmedId}']`).click();
                            let theCards = JSON.parse(localStorage.getItem('Cards'));

                            choosenCard = ""
                            theCards.forEach(element => {
                                if(element.id === trimmedId){
                                    choosenCard = element;
                                    customSocialtags = `
                                        <!-- Twitter Card data -->
                                        <meta name="twitter:card" value="${choosenCard.description}">

                                        <!-- Open Graph data -->
                                        <meta property="og:title" content="${choosenCard.name}" />
                                        <meta property="og:type" content="article" />
                                        <meta property="og:url" content="${window.location.href }" />
                                        <meta property="og:image" content="${choosenCard.imageUrl ? choosenCard.imageUrl : 'https://werepair.org/wp-content/uploads/2017/08/logo1-1.png'}" />
                                        <meta property="og:description" content="${choosenCard.description}" />
                                    `

                                    $("body").append(customSocialtags);
                                }

                            })
                        }else{
                            // We get all the cards
                            let allCards = JSON.parse(localStorage.getItem('allCards'));
                            let theCards = JSON.parse(localStorage.getItem('Cards'));
                            // We get the card that matches the id
                            allCards.forEach(element => {
                                if(element.includes(trimmedId)){
                                    $('#hidden__block__popup').append(element);
                                }
                            });
                            

                            // we trigger the popup
                            if($(`.the-card [data-event-id='${trimmedId}']`).length > 0){
                                $(`.the-card [data-event-id='${trimmedId}']`).click();
                                $('#hidden__block__popup').innerHTML = '';

                                choosenCard = ""
                                theCards.forEach(element => {
                                    if(element.id === trimmedId){
                                        choosenCard = element;
                                        customSocialtags = `
                                            <!-- Twitter Card data -->
                                            <meta name="twitter:card" value="${choosenCard.description}">

                                            <!-- Open Graph data -->
                                            <meta property="og:title" content="${choosenCard.name}" />
                                            <meta property="og:type" content="article" />
                                            <meta property="og:url" content="${window.location.href }" />
                                            <meta property="og:image" content="${choosenCard.imageUrl ? choosenCard.imageUrl : 'https://werepair.org/wp-content/uploads/2017/08/logo1-1.png'}" />
                                            <meta property="og:description" content="${choosenCard.description}" />
                                        `

                                        $("body").append(customSocialtags);
                                    }

                                })
                            }
                        }
                    }else{
                        // We check if the element exist on the DOM already
                        if($(`.the-card [data-event-id='${popupId}']`).length > 0) {
                            $(`.the-card [data-event-id='${popupId}']`).click();
                        }else{
                            // We get all the cards
                            let allCards = JSON.parse(localStorage.getItem('allCards'));
                            let theCards = JSON.parse(localStorage.getItem('Cards'));
                            // We get the card that matches the id
                            allCards.forEach(element => {
                                if(element.includes(popupId)){
                                    $('#hidden__block__popup').append(element);
                                }
                            });
                            
                            // we trigger the popup
                            if($(`.the-card [data-event-id='${popupId}']`).length > 0){
                                $(`.the-card [data-event-id='${popupId}']`).click();

                                choosenCard = ""
                                theCards.forEach(element => {
                                    if(element.id === trimmedId){
                                        choosenCard = element; 
                                        customSocialtags = `
                                            <!-- Twitter Card data -->
                                            <meta name="twitter:card" value="${choosenCard.description}">

                                            <!-- Open Graph data -->
                                            <meta property="og:title" content="${choosenCard.name}" />
                                            <meta property="og:type" content="article" />
                                            <meta property="og:url" content="${window.location.href }" />
                                            <meta property="og:image" content="${choosenCard.imageUrl ? choosenCard.imageUrl : 'https://werepair.org/wp-content/uploads/2017/08/logo1-1.png'}" />
                                            <meta property="og:description" content="${choosenCard.description}" />
                                        `
                                        $("body").append(customSocialtags); 
                                    }

                                })
                                }
                        }
                    }
                }
            }

        }

        CreatePopupWithGet();

        // Check if theres any event, if not we dislpay a message
        function sendMessageIfEvent(){
            
            var cardExist = $('.the-card');
            
            if(cardExist.length === 0){
                $('#list').innerHTML = '';
                
                var emptyMessage = `<div class="col-sm-12 no-match-criteria"><p>Thanks for your interest. Right now, we don't have any upcoming opportunities that meet the criteria you searched for. Try adjusting your criteria, or check back soon to see our latest postings. We add new opportunities often, so definitely stay tuned or follow us at <strong>@servethemoment</strong> on social media for the latest updates.</p></div>`;
                $('#list').prepend(emptyMessage);
                $('#full_ops h2').hide();
                $('#full_ops .sub-text').hide();

                $(".pagination-btn").remove();
                $("#list_controller p").remove();
            }

            $('#emptyUrlSearch').remove();

            // if($('#carousel-list .the-card').length > 0){
            //     $('#ongoing-carousel h2').show();
            // }else{
            //     $('#ongoing-carousel h2').hide();
            // }

            if($('#full_ops .the-card').length > 0){
                $('#full_ops h2').show();
                $('#full_ops .sub-text').show();
            }else{
                $('#full_ops h2').hide();
                $('#full_ops .sub-text').hide();
            }
        }
        
        sendMessageIfEvent();

    }, 2000)
});
// ===== END START OF THE FIRST CICLE OF THE CODE ===== // 

// ====== HANDLE PAGINATION AFTER EVENTS ARE LOADED ===== //
function changePage(number, cards){

    var pageList = new Array();
    var currentPage = 1;
    if($(window).width() > 500) {
        var numberPerPage = 8;
    }else{
        var numberPerPage = 2;
    }

    var inputOptions = Array.from($( ".issues__wrapper .select_options input:checked" ));
    
    if(inputOptions.length){
        var inputChecked = new Array();
        inputOptions.forEach(element => {
            inputChecked.push($(element).val());
        });
    }else{
        var inputChecked = null;
    }
    var citySearch = $('.city__input .option.selected').attr('data-value');
    if(citySearch === 'nyc'){
        citySearch = ['harlem', 'brooklyn', 'ny'];
    }
    if(citySearch == '-1'){
        citySearch = null;
    }
    var interestSearch = $('#interest').val();
    var partnerSearch = $('#partner').val();
    var dateSearch = JSON.parse(localStorage.getItem('finalInputsRange'));
    var typeEvent = $('.type__input .option.selected').attr('data-value');
    // Create the array for the search Dates
    var datesArray = new Array();
    datesArray.push(dateSearch);
    datesArray.sort();
    
    searchData =  JSON.parse(localStorage.getItem('searchData'));

    if(searchData === null){
        searchData = [];
        searchData.push(citySearch);
        searchData.push(inputChecked);
        searchData.push(interestSearch);
        searchData.push(datesArray);
        searchData.push(typeEvent);
 
 
         if(searchData[3][0] === null || searchData[3][0] === undefined ){
             TimeRange = false;
         }else{
             TimeRange = true;
         }
     }else{
 
    }

    apiCallData =  JSON.parse(localStorage.getItem('cards'));

    if(searchData[3][0] === null || searchData[3][0] === undefined ){
        TimeRange = false;
    }else{
        TimeRange = true;
    }
    
    var apiCallData = JSON.parse(localStorage.getItem('cards'));

    list = cards;

    var numberOfPages = 0;
    var numberPage = number;
    
    load(number, list, numberPerPage);

    if($(window).width() > 500) {
        $('html, body').animate({
            scrollTop: $("#opportunities__title").offset().top
        }, 400);
    }else{
        $('html, body').animate({
            scrollTop: $("#opportunities__title").offset().top
        }, 400);
    }

}
function makeList(list, numberPerPage,  number) {
    numberOfPages = getNumberOfPages(list, numberPerPage);
    
    loadList(number, list, numberPerPage);
}
function getNumberOfPages(list, numberPerPage) {
    return Math.floor(list.length / numberPerPage);

}
function loadList(number, list, numberPerPage) {
    currentPage = number;
    var begin = ((currentPage ) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    if(pageList.length){
        drawList(number, pageList, list);
    }
    if($("[data-value='nyc']").length > 1){
        $("[data-value='nyc']")[0].remove();
    }
}    
function drawList(number, pageList, list) {
    document.getElementById("list").innerHTML = "";
    document.getElementById("list_controller").innerHTML = "";

    for (r = 0; r < pageList.length; r++) {
        document.getElementById("list").innerHTML += pageList[r] ;
    }

    var cardExist = $('.the-card');
    
    createButtons(number, list);

}
function createButtons(number, list) {
    if($(window).width() > 500) {
        var buttons = Math.ceil(list.length / 8);
    }else{
        var buttons = Math.ceil(list.length / 3);
    }
    var buttonArray =  new Array();
    var activeButton = '';
    
    var theButton = "";

    theButton = 
    `
    <li class="pointer-none  pagination-btn btn-index" data-page="${number }" data-total="${buttons}">${number + 1}</li>
    <p>OF</p>
    <li class="pointer-none pagination-btn btn-index" data-page="${buttons}" data-total="${buttons}">${buttons}</li>
    `;

    buttonArray.push(theButton);
    

    var nn = parseInt(number) + 1;
    var pp = parseInt(number) - 1;
    

    var prevButton =  `
    <li tabindex="0" aria-label="previous page"  class=" pagination-btn btn-index prev-controller-button" data-page="${pp}" data-total="${buttons}" style="display:none;">
        <svg xmlns="http://www.w3.org/2000/svg" width="7.27" height="12.722" viewBox="0 0 7.27 12.722">
            <path id="Hover" d="M102.219,29.952l-4.887,4.739a.909.909,0,1,0,1.285,1.285l5.453-5.453a.907.907,0,0,0,0-1.284h0l-5.447-5.45a.91.91,0,0,0-1.29,1.285l4.887,4.879" transform="translate(104.336 36.242) rotate(180)" fill="#00a99e" fillRule="evenodd"/>
        </svg>
    </li>`;

    var nextButton =  `
    <li tabindex="0" aria-label="next page"  class=" pagination-btn btn-index next-controller-button" data-page="${nn}" data-total="${buttons}"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="7.27" height="12.722" viewBox="0 0 7.27 12.722">
            <path id="Hover" d="M102.219,29.952l-4.887,4.739a.909.909,0,1,0,1.285,1.285l5.453-5.453a.907.907,0,0,0,0-1.284h0l-5.447-5.45a.91.91,0,0,0-1.29,1.285l4.887,4.879" transform="translate(-97.066 -23.52)" fill="#00a99e" fillRule="evenodd"/>
        </svg>
    </li>`;


    if(buttons === 1){

    }else{
        $( "#list_controller" ).append(prevButton);
    }

    $( "#list_controller" ).append(buttonArray);

    if(buttons === 1){

    }else{
        $( "#list_controller" ).append(nextButton);
    }

    $(`.pagination-btn`).removeClass('active');
    $(`[data-page='${number}']`).not('.more-button-controller').addClass('active');
    

    if(pp === 0){
        $('.prev-controller-button').hide().css('display', 'none!important');
        //$('.pagination-btn').not('.more-button-controller').show();
    }
    if(pp > 0){
        $('.next-controller-button').show();
    }
    if(nn > 0){
        //$('.pagination-btn').not('.more-button-controller').hide();
        $('.prev-controller-button').show().css('display', 'block!important');
    }
    if(nn >= parseInt(buttons)){
        $('.next-controller-button').hide();
    }

}
function load(number, list, numberPerPage) {
    
    makeList(list, numberPerPage, number);
    var cardExist = $('.the-card');

    if(cardExist.length){
        $('#list').innerHTML = '';
        if($('#emptyUrlSearch').length){
            var emptyMessage = `<div class="col-sm-12 no-match-criteria"><p>Thanks for your interest. Right now, we don't have any upcoming opportunities that meet the criteria you searched for. Try adjusting your criteria, or check back soon to see our latest postings. We add new opportunities often, so definitely stay tuned or follow us at <strong>@servethemoment</strong> on social media for the latest updates.</p></div>`;
            $('#list').prepend(emptyMessage);
        }
    }else{
        var emptyMessage = `<div class="no-match-criteria"><p>Thanks for your interest. Right now, we don't have any upcoming opportunities that meet the criteria you searched for. Try adjusting your criteria, or check back soon to see our latest postings. We add new opportunities often, so definitely stay tuned or follow us at <strong>@servethemoment</strong> on social media for the latest updates.</p></div>`;
        $('#list').prepend(emptyMessage);
    }
    
    $('#emptyUrlSearch').remove();

    if($('#full_ops .the-card').length > 0){
        $('#full_ops h2').show();
        $('#full_ops .sub-text').show();
    }else{
        $('#full_ops h2').hide();
        $('#full_ops .sub-text').hide();
    }
}
// ====== END OF HANDLE PAGINATION AFTER EVENTS ARE LOADED ===== //

// ====== formatDataEvents() - Here we format the cards to show them in the correct way ====== //
function formatDataEvents(data, searchData = null, removedTag = null, TimeRange = false){


    var apiCallData = JSON.parse(localStorage.getItem('cards'));

    // loop to get events to create each element and print them on screen
    if($('.date_get .start').length){
        datesLoop = new Array();
        var start = $('.date_get .start')[0].innerHTML;
        start = start.replace(/ /g, '').replace(/\\n/g, '').replace(/\n/g, '').toLowerCase();
        if($('.date_get .end').length){
            var end = $('.date_get .end')[0].innerHTML;
            end = end.replace(/ /g, '').replace(/\\n/g, '').replace(/\n/g, '').toLowerCase();
            var start = new Date(start);
            var end = new Date(end);
            var range = Array(Math.floor((end - start) / 86400000) + 1).fill().map((_, idx) => (new Date(start.getTime() + idx * 86400000)))

            var finalRange = new Array();
            for (let index = 0; index < range.length; index++) {
                var element = range[index];
                day = element.getDate();
                year = element.getFullYear();
                
                function tranformMonth(date){
                    month = date.getMonth();
                    month =  month +1;
                    return (month);
                };

                month = tranformMonth(element);
                if(month < 10){
                    month = '0'+month;
                }
                if(day < 10){
                    day = '0'+day;
                }

                var newDate = `${month}-${day}-${year}`;
                finalRange.push(newDate);
                TimeRange = true;
            }

            datesLoop = finalRange; 
        }else{
            datesLoop.push(start);
            TimeRange = true;
        }
    }else{
        if(!TimeRange){
            var datesLoop = JSON.parse(localStorage.getItem('dateRange'));
        }else{
            var datesLoop = JSON.parse(localStorage.getItem('finalInputsRange'));
        }
    }
    var searchHit = false;
    if($('.location_get').length || $('.issue_get').length || $('.partner_get').length || $('.date_get .start').length || $('.type_get').length ){
        searchHit = true;
        searchData = new Array('', '', '', '', '', '');

        if($('.location_get').length){
            var city = $('.location_get');
            city = $(city)[0].innerHTML; 
            
            city = city.replace(/ /g, '').replace(/↵/g, '').replace(/,/g, '').replace(/\//g, '').replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').replace(/\\n/g, '').replace(/\n/g, '').replace(/-/g, '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '').toLowerCase();

            var currentValue = $(`.city__input .nice-select .list [data-value="${city}"]`);


            if(currentValue.length){

                $(`.city__input .nice-select .list li`).removeClass('selected');
                $(`.city__input .nice-select .list [data-value="${city}"]`).addClass('selected');
                currentValue = currentValue[0].innerHTML;
                $(`.city__input .nice-select .current`)[0].innerHTML = currentValue;

                
                $(`.${city}`).prop('selected', true);

                if(city === 'nyc'){
                    searchData[0] = ['harlem', 'brooklyn', 'ny'];
                }else{
                    searchData[0] = city;
                }
            }else{
                searchData = [];
            }   
            
                    
        }

        searchData[1] = "";

        if($('.issue_get').length){
            var interest = $('.issue_get');
            interest = $(interest)[0].innerHTML; 
            interest = interest.replace(/ /g, '').replace(/↵/g, '').replace(/,/g, '').replace(/\//g, '').replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').replace(/\\n/g, '').replace(/\n/g, '').replace(/-/g, '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '').toLowerCase();
            var currentValue = $(`.interest__input .nice-select .list [data-value="${interest}"]`);
            if(currentValue.length){
                searchData[2] = interest;

                $(`.${interest}`).prop('selected', true);

                $(`.interest__input .nice-select .list li`).removeClass('selected');
                $(`.interest__input .nice-select .list [data-value="${interest}"]`).addClass('selected');
                currentValue = currentValue[0].innerHTML;
                $(`.interest__input .nice-select .current`)[0].innerHTML = currentValue;
            }else{
                searchData = [];
            }
        }
        if($('.partner_get').length){
            var partner = $('.partner_get');
            partner = $(partner)[0].innerHTML; 
            partner = partner.replace(/ /g, '').replace(/↵/g, '').replace(/,/g, '').replace(/\//g, '').replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').replace(/\\n/g, '').replace(/\n/g, '').replace(/-/g, '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '').toLowerCase();
            var currentValue = $(`.partner__input .nice-select .list [data-value="${partner}"]`);
            if(currentValue.length){

                $(`.${partner}`).prop('selected', true);
                
                searchData[5] = partner;
                $(`.partner__input .nice-select .list li`).removeClass('selected');
                $(`.partner__input .nice-select .list [data-value="${partner}"]`).addClass('selected');
                currentValue = currentValue[0].innerHTML;
                $(`.partner__input .nice-select .current`)[0].innerHTML = currentValue;
            }else{
                searchData = [];
            }
        }
        if($('.date_get .start').length){
            searchData[3] = new Array('');
            searchData[3][0] = datesLoop;
        }

        if($('.type_get').length){
            
            type = $('.type_get')[0].innerHTML; 
            type = type.replace(/ /g, '').replace(/↵/g, '').replace(/,/g, '').replace(/\//g, '').replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').replace(/\\n/g, '').replace(/\n/g, '').replace(/-/g, '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '').toLowerCase();

            $(`.${type}`).prop('selected', true);

            if(type.length){
                searchData[4] = type;
            }else{
                searchData[4] = type;
            }
        }

        localStorage.setItem('searchData', JSON.stringify(searchData));
    }   

    setTimeout(function(){
        if(document.querySelectorAll(".info__wrapper").length > 0){
            document.querySelectorAll(".info__wrapper")[0].remove();
        }
    }, 1000)

    var finalData = new Array();
    var theCardsArray = new Array();
    var searchWasTrue = false;  

    for (let index = 0; index < datesLoop.length; index++) {

        var date = datesLoop[index];
        if(TimeRange){
            theDate = date;
        }else{
            theDate = date.value;
        }

        newData = theCards;
        var currentCards = apiCallData.filter(element => element.formatDate === theDate);
        if(searchData){  
            if(searchHit){
                var searchWasTrue = true;
            }
            // Filter City
            var filter = {
                
            }
            if(searchData[0]){
                if(searchData[0].includes('harlem') || searchData[0].includes('brooklyn') || searchData[0].includes('ny')){
                    var newCurrentCards = new Array();
                    filter.filterCity = new Array();
                    for (let index = 0; index < searchData[0].length; index++) {
                        const element = searchData[0][index];
                        filter.filterCity.push(element);
                    }
                    filter.filterCity.forEach(internal => {
                        currentCards.forEach(element => {
                            if(internal === element.filterCity){
                                if(element.filterCity){
                                    newCurrentCards.push(element);
                                }
                            }
                        });
                    });
                    delete filter.filterCity; 
                    newCurrentCards  = [...new Set(newCurrentCards)];
                    currentCards = new Array();
                    newCurrentCards.forEach(element => {
                        currentCards.push(element);
                    });
                }else{
                    filter.filterCity = searchData[0];
                }
            }
            
            if(searchData[1]){
                var newCurrentCards = new Array();
                filter.filterContext = new Array();
                for (let index = 0; index < searchData[1].length; index++) {
                    const element = searchData[1][index];
                    filter.filterContext.push(element);
                }

                filter.filterContext.forEach(internal => {
                    var filtered = '';
                    currentCards.forEach(element => {
                        element.filterContext.forEach(data => {
                            if(internal === data){
                                if(element){
                                    newCurrentCards.push(element);
                                }
                            }
                        });
                    });
                });

                delete filter.filterContext; 
                newCurrentCards  = [...new Set(newCurrentCards)];
                currentCards = new Array();
                newCurrentCards.forEach(element => {
                    currentCards.push(element);
                });

                
            }
            if(searchData[2]){
                filter.filterIssue = searchData[2]
            }  

            if(searchData[5]){
                filter.filterPartner = searchData[5]
            }  

            currentCards = currentCards.filter(function(item) {
                for (var key in filter) {
                    if (item[key] === undefined || item[key] != filter[key])
                    return false;
                }
                return true;
            });

            if(searchData[4]){
                var newCurrentCards = new Array();
                if(searchData[4] === "ongoing"){
                    currentCards.forEach(element => {
                        if(element.isOngoing === true){
                            newCurrentCards.push(element);
                        }
                    });
                    newCurrentCards  = [...new Set(newCurrentCards)];
                    currentCards = new Array();
                    newCurrentCards.forEach(element => {
                        currentCards.push(element);
                    });
                }
                if(searchData[4] === "virtual"){
                    currentCards.forEach(element => {
                        if(element.isVirtual === true){
                            newCurrentCards.push(element);
                        }
                    });
                    newCurrentCards  = [...new Set(newCurrentCards)];
                    currentCards = new Array();
                    newCurrentCards.forEach(element => {
                        currentCards.push(element);
                    });
                }
                if(searchData[4] === "inperson"){
                    currentCards.forEach(element => {
                        if(element.isVirtual === false){
                            newCurrentCards.push(element);
                        }
                    });
                    newCurrentCards  = [...new Set(newCurrentCards)];
                    currentCards = new Array();
                    newCurrentCards.forEach(element => {
                        currentCards.push(element);
                    });
                }
            }else{
                searchData[4] = "";
            }
        }
        
        if(currentCards.length){
            // We insert the data into the array
            var finalData = new Array();
            for (let index = 0; index < currentCards.length; index++) {
                var element = currentCards[index];
                    if(element || element.length){
                        finalData.push(element);
                    }
                    
            }
            // We push the info into the array
            for (let index = 0; index < finalData.length; index++) {
                const element = finalData[index];
                if(element || element.length){
                    theCardsArray.push(element);
                }
                
            }
        }
    }
    if(searchData && searchData.length > 0){
        if(searchData[0] === '' && searchData[1] === '' && searchData[2] === '' && searchData[3] === '' && searchData[5] === '' && searchWasTrue){
            const emptyUrlSearch = `<div id="emptyUrlSearch" style="display: none;">true</div>`;
            $('.page__section.opportunities').append(emptyUrlSearch);
        }
    }


    if(searchData && searchData.length === 0 && searchWasTrue && theCardsArray.length === 0 && searchWasTrue){
        const emptyUrlSearch = `<div id="emptyUrlSearch" style="display: none;">true</div>`;
        $('.page__section.opportunities').append(emptyUrlSearch);
        theCardsArray = [];
        searchData = [];
    }

    theCardsArray  = [...new Set(theCardsArray)];
    var theCards = curatedCards(theCardsArray, searchData, removedTag);
    
    return theCards;



}   
// ====== END OF formatDataEvents() - Here we format the cards to show them in the correct way ====== //


// ====== curatedCards() - Curates cards function ====== // 
function curatedCards(data, searchData = null, removedTag = null){

    // We clean old data from the DOM
    document.getElementById("hidden_list").innerHTML = '';
    document.getElementById("list").innerHTML = "";
    document.getElementById("list_controller").innerHTML = "";
    // We Store the Cards and the tag selected so we can access it inside the loop
    
    localStorage.setItem('removedTag', JSON.stringify(removedTag));
    if(!searchData){
        var searchData = new Array();
        //var datesArray = new Array('06/30/2019', '05/17/2019', '01/22/2019');
        var citySearch = $('.city__input .option.selected').attr('data-value');
        if(citySearch === 'nyc'){
            citySearch = ['harlem', 'brooklyn', 'ny'];
        }
        if(citySearch == '-1'){
            citySearch = null;
        }
        var issueSearch = $('#issues').val();
        var interestSearch = $('#interest').val();
        var partnerSearch = $('#partner').val();
        var typeEvent = $('.type__input .option.selected').attr('data-value');
        var dateSearch = JSON.parse(localStorage.getItem('finalInputsRange'));
        // Create the array for the search Dates
        var datesArray = new Array();
        datesArray.push(dateSearch);
        datesArray.sort();
        
        searchData.push(citySearch);
        searchData.push(issueSearch);
        searchData.push(interestSearch);
        searchData.push(datesArray);   
        searchData.push(typeEvent);
        searchData.push(partnerSearch);
    }
    var info = data;


    if( searchData[0] === null &&  searchData[1] === undefined   && searchData[2] === null && searchData[3][0] === null  && searchData[4] === "-1" && searchData[5] === null){
        theCards = new Array();
        onGoingCards = new Array();
        globalArray = Array();
        globalOngoing  = Array();
        for (let index = 0; index < info.length; index++) {
            var data = info[index];
            // We iterate trought the context content info
            var cardContext = new Array();
            if(data.context.includes(";")){
                var explodedString = data.context.split(";");
                // Display array values on page
                for(var i = 0; i < explodedString.length; i++){
                    if(explodedString[i].includes('Fam') || explodedString[i].includes('Teen') || explodedString[i].includes('MLK') || explodedString[i].includes('Ongo') || explodedString[i].includes('Virt')){
                        if(explodedString[i].includes('Fam')){
                            explodedString[i] = 'Families';
                        }
                        cardContext.push(explodedString[i]);
                    }  
                }
            }else{
                if(data.context.includes('Fam') || data.context.includes('Teen') || data.context.includes('MLK') || data.context.includes('Ongo') || data.context.includes('Virt') ){
                    if(data.context.includes('Fam')){
                        data.context = 'Families';
                    }
                    cardContext.push(data.context);
                }  
            }
            var newDescription = data.promo.substring(0, 70);
            if(newDescription.length >= 70){
                newDescription = `${newDescription}...`;
            }
            var theIssue ='';
            if(!data.issue.includes('Other')){
                theIssue = data.issue;
                
            }else{
                theIssue = data.issue;
                data.issue = 'display:none';
            }
            // Clean, remove spaces and lowercase the info
            theIssue = theIssue.replace(/ /g, '').replace(/,/g, '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/-/g, '').replace(/\//g, '').replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').replace(/-/g, ''.replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '')).replace(/'/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '').toLowerCase();
            
            let theCity = data.city;
            // Clean, remove spaces and lowercase the info
            theCity = theCity.replace(/ /g, '');theCity = theCity.replace(/,/g, ''.replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '')).replace(/'/g, '').replace(/-/g, '');theCity = theCity.replace(/\//g, '').replace(/-/g, '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '');theCity = theCity.replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').toLowerCase();               
    
            let theContext = data.context;
            // Clean, remove spaces and lowercase the info
            theContext = theContext.replace(/ /g, '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/-/g, '');theContext = theContext.replace(/,/g, '').replace(/-/g, ''.replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '')).replace(/'/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '');theContext = theContext.replace(/\//g, '');theContext = theContext.replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').toLowerCase();
            

            let thePartner = data.partner;
            // Clean, remove spaces and lowercase the info
            thePartner = thePartner.replace(/ /g, '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/-/g, '');thePartner = thePartner.replace(/,/g, '').replace(/-/g, ''.replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '')).replace(/'/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '');thePartner = thePartner.replace(/\//g, '');thePartner = thePartner.replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').toLowerCase();

            let theDate = new Date(data.date);
            theDate = new Date( theDate.getTime() + Math.abs(theDate.getTimezoneOffset()*60000) ) ;
            // Clean, remove spaces and lowercase the info
            let day = theDate.getDate();
            let year = theDate.getFullYear();
            var month = new Date();
            var curday = function(date){
                month = theDate.getMonth();
                month =  month +1;
                return (month);
            };

            month = curday(theDate);
            if(month < 10){
                month = '0'+month;
            }
            if(day < 10){
                day = '0'+day;
            }
            theDate = `${month}${day}${year}`;

            if(month == 1){month = 'Jan';}else if(month == 2){month = 'Feb';}else if(month == 3){month = 'Mar';}else if(month == 4){month = 'Apr';}else if(month == 5){month = 'May';}else if(month == 6){month = 'Jun';}else if(month == 7){month = 'Jul';}else if(month == 8){month = 'Aug';}else if(month == 9){month = 'Sep';}else if(month == 10){month = 'Oct';}else if(month == 11){month = 'Nov';}else if(month == 12){month = 'Dec';}

            // We format the date into date field
            var comparedDate = new Date(data.date);
            date = new Date(date);
            date = new Date( date.getTime() + Math.abs(date.getTimezoneOffset()*60000) ) ;
            date = date.toDateString();
            // Create the context array for the classes of the event
            var formatedContext = new Array();
            cardContext.forEach(element => {
                element = element.replace(/ /g, '')
                                 .replace(/,/g, '')
                                 .replace(/\//g, '')
                                 .replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '')
                                 .replace(/-/g, '')
                                 .replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '')
                                 .replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '')
                                 .toLowerCase();
                                 
                formatedContext.push(element);
            });

            var theImage = "<div class='image__placeholder'></div>";
            
            if( data.imageUrl === "https://werepair.org/wp-content/uploads/2017/08/logo1-1.png"){
                
            }else{
                
                theImage = 
                `
                <img loading="lazy" src="${data.imageUrl}" alt="Event: ${data.name}" onerror="this.style.opacity='0'">
                `;
            }
            let onGoingTag = ""; 
            let isVirtualTag = ""; 
            let cardDate = `${month} ${day}, ${year}`;
            if(data.isOngoing){
                onGoingTag ="<span class='teal__tag'>Ongoing</span>"
                cardDate = "Ongoing"
            }
            if(data.isVirtual){
                isVirtualTag = "<span class='teal__tag'>Virtual</span>"
            }
            if(theCity === "ny"){
                theCity = "NYC";
            }
            // We create the final card we are going to print
            let theCard = ` <div  class="col-sm-6 card-${index} the-card ${theCity} ${theContext} ${thePartner} ${theDate} ${theIssue === "card" ? "card__issue" : theIssue }" data-event-id="${data.id}">
                <!-- Card -->
                <div class="card" 
                    data-event-venue="${data.venue}" 
                    data-event-partner-link="${data.partnerLink}" 
                    data-event-registration="${data.registrationType}" 
                    data-event-email-registration="${data.registratioEmail}" 
                    data-event-city="${theCity}"
                    data-event-description="${data.promo}" 
                    data-event-date="${data.date}"
                    data-event-time="${data.startAt}"
                    data-event-end="${data.endAt}" 
                    data-event-name="${data.name}" 
                    data-event-partner="${data.partner}" 
                    data-event-id="${data.id}"
                    data-full-address="${data.fullAddress}"
                    data-event-community="${data.communityID}"
                    data-event-context="${formatedContext.map((item, i) => `${item} `).join('')}"
                    data-ongoing="${data.isOngoing}"
                    data-isvirtual="${data.isVirtual}"
                    data-timezone="${data.timeZone}"
                    data-issue="${theIssue}"
                    data-servelink="${data.serveLink}"
                >
                    <div class="card__header col-sm-12 col-md-12 col-lg-4" style="background: url(https://stm.raxo.dev/wp-content/uploads/2020/08/STM_LOGO_Repair-055.svg);background-color: #f7f7f7;background-size: contain;background-repeat: no-repeat;background-position: center;border: solid 1px lightgray!important;" data-background-city="${theCity}">
                        ${theImage}
                    </div>
                    <div class="card__content__wrapper col-sm-12 col-md-12 col-lg-8">
                        <div class="card__title">
                            <h3>${data.name}</h3>
                            <div class="card__tags" >                               
                                <span class="gray__tag" style="${data.issue};">${data.partner}</span>
                            </div>
                            <div class="registration__custom__link" style="display:none;">
                                ${data.formURL}
                            </div>
                        </div>
                        <div class="card__date">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                    <span class="date">${cardDate}</span>
                                    <span class="date__separator">|</span>
                                    <span class="location">${data.city}</span>
                                </div>
                            </div>
                        </div>
                        <div class="card__content">
                            <p>${newDescription}</p>
                        </div>
                        <div class="card____button" >
                            <a  class="learn__more__btn" tabindex="0">MORE INFO</a>
                        </div>
                    </div>
                </div>
                <!-- / Card -->
            </div>`;

            comparedDate = new Date( comparedDate.getTime() + Math.abs(comparedDate.getTimezoneOffset()*60000) ) ;
            day = comparedDate.getDate();
            year = comparedDate.getFullYear();
            var today = new Date();
            function tranformMonth(date){
                month = comparedDate.getMonth();
                month =  month +1;
                return (month);
            };

            month = tranformMonth(comparedDate);
            if(month < 10){
                month = '0'+month;
            }
            if(day < 10){
                day = '0'+day;
            }

            var finalDate = `${month}-${day}-${year}`;
            comparedDate.setHours(0,0,0,0);
            today.setHours(0,0,0,0);
            // Insert the option into the html
            if(data.description.includes("Canceled because")){

            }else{
                // if(comparedDate >= today && !data.isOngoing && theCity !== "global"){
                //     theCards.push(theCard);
                // }
                // if(comparedDate >= today ){
                //     theCards.push(theCard);
                // }
                if(data.isOngoing /*&& comparedDate >= today*/ /*&& theCity !== "global"*/){
                    onGoingCards.push(theCard);
                }
    
                if(comparedDate >= today && !data.isOngoing /*&& theCity === "global"*/){
                    theCards.push(theCard);
                }
                // if(data.isOngoing && theCity === "global"){
                //     globalOngoing.push(theCard);
                // }
            }


        }

        // onGoingCards.sort(function(a, b){
        //     let compareA = a.split('data-event-city="')[1];
        //     compareA = compareA.substring(0, compareA.indexOf('"'));

        //     let compareB = b.split('data-event-city="')[1];
        //     compareB = compareB.substring(0, compareB.indexOf('"'));

        //     if(compareA.toLowerCase() < compareB.toLowerCase()) { return -1; }
        //     if(compareA.toLowerCase() > compareB.toLowerCase()) { return 1; }
        //     return 0;
        // })
        // // globalArray.forEach(element => {
        // //     theCards.push(element);
        // // })
        // globalOngoing.forEach(element => {
        //     onGoingCards.unshift(element);
        // })
        
        var theCards = theCards.concat(onGoingCards);
        
        localStorage.setItem('onGoingCards', JSON.stringify(onGoingCards));
        localStorage.setItem('allCards', JSON.stringify(theCards));

    }else if(searchData){
        theCards = new Array();
        globalArray = Array();
        globalOngoing  = Array();
        onGoingCards = new Array();
            for (let index = 0; index < info.length; index++) {
                
                var data = info[index];
                
                var cardContext = new Array();
                if(data.context.includes(";")){
                    var explodedString = data.context.split(";");
                    // Display array values on page
                    for(var i = 0; i < explodedString.length; i++){
                        if(explodedString[i].includes('Fam') || explodedString[i].includes('Teen') || explodedString[i].includes('MLK') || explodedString[i].includes('Ongo') || explodedString[i].includes('Virt')){
                            if(explodedString[i].includes('Fam')){
                                explodedString[i] = 'Families';
                            }
                            cardContext.push(explodedString[i]);
                        }  
                    }
                }else{
                    if(data.context.includes('Fam') || data.context.includes('Teen') || data.context.includes('MLK') || data.context.includes('Ongo') || data.context.includes('Virt') ){
                        if(data.context.includes('Fam')){
                            data.context = 'Families';
                        }
                        cardContext.push(data.context);
                    }  
                }
                var newDescription = data.promo.substring(0, 70);
                if(newDescription.length >= 70){
                    newDescription = `${newDescription}...`;
                }
                var theIssue = '';
                if(!data.issue.includes('Other')){
                theIssue = data.issue;
                
                }else{
                    theIssue = data.issue;
                    data.issue = 'display:none';
                }
                // Clean, remove spaces and lowercase the info
                theIssue = theIssue.replace(/ /g, '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/-/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '').replace(/,/g, '').replace(/\//g, '').replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').toLowerCase();
                
                let theCity = data.city;
                
                // Clean, remove spaces and lowercase the info
                theCity = theCity.replace(/ /g, '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/-/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '');theCity = theCity.replace(/,/g, '');theCity = theCity.replace(/\//g, '');theCity = theCity.replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').toLowerCase();    

                let theContext = data.context;
                // Clean, remove spaces and lowercase the info
                theContext = theContext.replace(/ /g, '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/-/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '');theContext = theContext.replace(/,/g, '');theContext = theContext.replace(/\//g, '');theContext = theContext.replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').toLowerCase();
                
                let thePartner = data.partner;
                // Clean, remove spaces and lowercase the info
                thePartner = thePartner.replace(/ /g, '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/-/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '');thePartner = thePartner.replace(/,/g, '');thePartner = thePartner.replace(/\//g, '');thePartner = thePartner.replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').toLowerCase();

                let theDate = new Date(data.date);
                theDate = new Date( theDate.getTime() + Math.abs(theDate.getTimezoneOffset()*60000) ) ;
                // Clean, remove spaces and lowercase the info
                let day = theDate.getDate();
                let year = theDate.getFullYear();
                var month = new Date();
                var curday = function(date){
                    month = theDate.getMonth();
                    month =  month +1;
                    return (month);
                };

                month = curday(theDate);
                if(month < 10){
                    month = '0'+month;
                }
                if(day < 10){
                    day = '0'+day;
                }
                theDate = `${month}${day}${year}`;

                if(month == 1){month = 'Jan';}else if(month == 2){month = 'Feb';}else if(month == 3){month = 'Mar';}else if(month == 4){month = 'Apr';}else if(month == 5){month = 'May';}else if(month == 6){month = 'Jun';}else if(month == 7){month = 'Jul';}else if(month == 8){month = 'Aug';}else if(month == 9){month = 'Sep';}else if(month == 10){month = 'Oct';}else if(month == 11){month = 'Nov';}else if(month == 12){month = 'Dec';}

                // We format the date into date field
                var comparedDate = new Date(data.date);
                date = new Date(date);
                date = new Date( date.getTime() + Math.abs(date.getTimezoneOffset()*60000) ) ;
                date = date.toDateString();
                // Create the context array for the classes of the event
                var formatedContext = new Array();
                cardContext.forEach(element => {
                    element = element.replace(/ /g, '').replace(/,/g, '').replace(/\//g, '').replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').replace(/&/g, '').replace("(", '').replace("[", '').replace("]", '').replace("'", '').replace("`", '').replace("!", '').replace("?", '').replace(";", '').replace(";", '').replace(")", '').replace(/#/g, '').replace(/'/g, '').replace(/-/g, '').replace(/!/g, '').replace("¡", '').replace("™", '').replace("£", '').replace("¢", '').replace("∞", '').replace("¶", '').replace("•", '').replace("ª", '').replace("º", '').replace("≠", '').replace("“", '').replace("‘", '').replace("æ", '').replace("«", '').replace("…", '').replace("≤", '').replace("≥", '').replace("÷", '').replace("œ", '').replace("∑", '').replace("´", '').replace("®", '').replace("†", '').replace("¥", '').replace("¨", '').replace("ˆ", '').replace("ø", '').replace("π", '').replace("å", '').replace("ß", '').replace("∂", '').replace("ƒ", '').replace("©", '').replace("˙", '').replace("∆", '').replace("˚", '').replace("¬", '').replace("≈", '').replace("ç", '').replace("√", '').replace("∫", '').replace("˜", '').replace("µ", '').toLowerCase();
                    formatedContext.push(element);
                });

                var theImage = "<div class='image__placeholder'></div>";
                if( data.imageUrl === "https://werepair.org/wp-content/uploads/2017/08/logo1-1.png"){
                    
                }else{
                    
                    theImage = 
                    `
                    <img loading="lazy" src="${data.imageUrl}" alt="Event: ${data.name}" onerror="this.style.opacity='0'">
                    `;
                }
            
                let onGoingTag = ""; 
                let isVirtualTag = ""; 
                let cardDate = `${month} ${day}, ${year}`;
                if(data.isOngoing){
                    onGoingTag ="<span class='teal__tag'>Ongoing</span>"
                    cardDate = "Ongoing"
                }
                if(data.isVirtual){
                    isVirtualTag = "<span class='teal__tag'>Virtual</span>"
                }
                if(theCity === "ny"){
                    theCity = "NYC";
                }
                // We create the final card we are going to print
                let theCard = ` <div tabindex="0" class="col-sm-6 card-${index} the-card ${theCity} ${theContext} ${thePartner} ${theDate} ${theIssue === "card" ? "card__issue" : theIssue }" data-event-id="${data.id}">
                    <!-- Card -->
                    <div class="card" 
                        data-event-venue="${data.venue}" 
                        data-event-partner-link="${data.partnerLink}" 
                        data-event-registration="${data.registrationType}" 
                        data-event-email-registration="${data.registratioEmail}" 
                        data-event-city="${theCity}"
                        data-event-description="${data.promo}" 
                        data-event-date="${data.date}"
                        data-event-time="${data.startAt}"
                        data-event-end="${data.endAt}"  
                        data-event-name="${data.name}" 
                        data-event-partner="${data.partner}" 
                        data-event-id="${data.id}"
                        data-full-address="${data.fullAddress}"
                        data-event-community="${data.communityID}"
                        data-event-context="${formatedContext.map((item, i) => `${item} `).join('')}"
                        data-ongoing="${data.isOngoing}"
                        data-isvirtual="${data.isVirtual}"
                        data-timezone="${data.timeZone}"
                        data-issue="${theIssue}"
                        data-servelink="${data.serveLink}"
                    >
           
                    <div class="card__header col-sm-12 col-md-12 col-lg-4" style="background: url(https://stm.raxo.dev/wp-content/uploads/2020/08/STM_LOGO_Repair-055.svg);background-color: #f7f7f7;background-size: contain;background-repeat: no-repeat;background-position: center;border: solid 1px lightgray!important;" data-background-city="${theCity}">
                        ${theImage}
                    </div>
                    <div class="card__content__wrapper col-sm-12 col-md-12 col-lg-8">
                        <div class="card__title">
                            <h3>${data.name}</h3>
                            <div class="card__tags" >                               
                                <span class="gray__tag" style="${data.issue};">${data.partner}</span>
                            </div>
                            <div class="registration__custom__link" style="display:none;">
                                ${data.formURL}
                            </div>
                        </div>
                        <div class="card__date">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                                    <span class="date">${cardDate}</span>
                                    <span class="date__separator"></span>
                                    <span class="location">${data.city}</span>
                                </div>
                            </div>
                        </div>
                        <div class="card__content">
                            <p>${newDescription}</p>
                        </div>
                        <div class="card____button">
                            <a  class="learn__more__btn" tabindex="0">MORE INFO</a>
                        </div>
                    </div>
                    <!-- / Card -->
                </div>`;

                

                comparedDate = new Date( comparedDate.getTime() + Math.abs(comparedDate.getTimezoneOffset()*60000) ) ;
                day = comparedDate.getDate();
                year = comparedDate.getFullYear();
                var today = new Date();
                function tranformMonth(date){
                    month = comparedDate.getMonth();
                    month =  month +1;
                    return (month);
                };
    
                month = tranformMonth(comparedDate);
                if(month < 10){
                    month = '0'+month;
                }
                if(day < 10){
                    day = '0'+day;
                }
    
                var finalDate = `${month}-${day}-${year}`;
                comparedDate.setHours(0,0,0,0);
                today.setHours(0,0,0,0);
                // Insert the option into the html

                if(data.description.includes("Canceled because")){

                }else{
                    // if(comparedDate >= today && !data.isOngoing && theCity !== "global"){
                    //     theCards.push(theCard);
                    // }
                    // if(comparedDate >= today ){
                    //     theCards.push(theCard);
                    // }
                    if(data.isOngoing /*&& comparedDate >= today*/ /*&& theCity !== "global"*/){
                        onGoingCards.push(theCard);
                    }
        
                    if(comparedDate >= today && !data.isOngoing /*&& theCity === "global"*/){
                        theCards.push(theCard);
                    }
                }

            }
            
            // onGoingCards.sort(function(a, b){
            //     let compareA = a.split('data-event-city="')[1];
            //     compareA = compareA.substring(0, compareA.indexOf('"'));

            //     let compareB = b.split('data-event-city="')[1];
            //     compareB = compareB.substring(0, compareB.indexOf('"'));

            //     if(compareA.toLowerCase() < compareB.toLowerCase()) { return -1; }
            //     if(compareA.toLowerCase() > compareB.toLowerCase()) { return 1; }
            //     return 0;
            // })
            
            // // globalArray.forEach(element => {
            // //     theCards.push(element);
            // // })
            // globalOngoing.forEach(element => {
            //     onGoingCards.unshift(element);
            // })
            
            var theCards = theCards.concat(onGoingCards);
            
            localStorage.setItem('onGoingCards', JSON.stringify(onGoingCards));
            localStorage.setItem('allCards', JSON.stringify(theCards));

            var tags = new Array();
            

            for (let index = 0; index < searchData.length; index++) {
                var tag = searchData[index];
                if(index < 3){
                    if(tag){
                        if(tag == ''){
                            tag = '';
                        }else{
                            var tag = `.${tag}`;
                        }

                        if(index === 0 ){

                            if(tag.includes('harlem') || tag.includes('brooklyn') || tag.includes('ny')){
                                tag = '.nyc'
                                var theClass = 'New York';
                            }else{
                                var theClass =$(`.form ${tag}`);
                            }
                            
                            if(theClass.length){
                                if(tag != '.nyc'){
                                    theClass = theClass[0].innerHTML;
                                }
                                
                                var tag = ` <li data-info="${tag}" data-tag-type="city">${theClass} <span class="tag-close">x</span></li>`;
                                tags.push(tag);
                            }

                        }
                        else if(index === 1 && index){
                            if(tag){
                                
                                searchData[1].forEach(element => {
                                    var theClass =$(`.select_options input.${element}`).attr('data-info');
                                    
                                    var tag = ` <li class="${element}" data-tag-type="appropriate" data-info=".${element}">${theClass} <span class="tag-close data-checkbox">x</span></li>`;
                                    tags.push(tag);
                                });
                                
                            }
                        }
                        else if(index === 2 ){
                            var theClass =$(`.form ${tag}`);
                            if(theClass.length){
                                theClass = theClass[0].innerHTML;
                                var tag = ` <li data-info="${tag}" data-tag-type="interest">${theClass} <span class="tag-close">x</span></li>`;
                                tags.push(tag);
                            }
                        }

                        else{
                            var theClass =$(`.form ${tag}`)[0].innerHTML;
                            var tag = `<li data-info="${tag}">${theClass} <span class="tag-close">x</span></li>`;
                            tags.push(tag);
                        }

                        
                    }  
                }else if(index === 3){
                    if(searchData[3]){
                        if(searchData[3][0] != null ){
                            if(tag != null ){
                                tag = tag[0];
                                tagEnd = tag.length;
                                
                                var firstItem = tag[0];
                                var lastItem = tag[tagEnd -1];

                                firstItem = firstItem.replace(/-/g, '/');
                                lastItem = lastItem.replace(/-/g, '/');
                            

                                if(firstItem === lastItem){
                                    lastItem = '';
                                    let theDate = new Date(firstItem);

                                    theDate = new Date( theDate.getTime() + Math.abs(theDate.getTimezoneOffset()*60000) ) ;
                                    // Clean, remove spaces and lowercase the info
                                    let day = theDate.getDate();
                                    let year = theDate.getFullYear();
                                    var month = new Date();
                                    var curday = function(date){
                                        month = theDate.getMonth();
                                        month =  month +1;
                                        return (month);
                                    };

                                    month = curday(theDate);
                                    if(month < 10){
                                        month = '0'+month;
                                    }
                                    if(day < 10){
                                        day = '0'+day;
                                    }

                                    if(month == 1){month = 'Jan';}else if(month == 2){month = 'Feb';}else if(month == 3){month = 'Mar';}else if(month == 4){month = 'Apr';}else if(month == 5){month = 'May';}else if(month == 6){month = 'Jun';}else if(month == 7){month = 'Jul';}else if(month == 8){month = 'Aug';}else if(month == 9){month = 'Sep';}else if(month == 10){month = 'Oct';}else if(month == 11){month = 'Nov';}else if(month == 12){month = 'Dec';}

                                    theDate = `${month} ${day}, ${year}`;

                                    firstItem = `<strong>From:</strong> ${theDate}`;
                                                                                                                        
                                    var tag = `<li data-time-tag="true" data-info="date">${firstItem}  ${lastItem}<span class="tag-close">x</span></li>`;
                                    tags.push(tag);

                                    firstItem = `From: ${theDate}`;

                                    $('.calendar__input').val(firstItem);
                                }else{
                                    let theDate = new Date(firstItem);
                                    theDate = new Date( theDate.getTime() + Math.abs(theDate.getTimezoneOffset()*60000) ) ;
                                    // Clean, remove spaces and lowercase the info
                                    let day = theDate.getDate();
                                    let year = theDate.getFullYear();
                                    var month = new Date();
                                    var curday = function(date){
                                        month = theDate.getMonth();
                                        month =  month +1;
                                        return (month);
                                    };

                                    month = curday(theDate);
                                    if(month < 10){
                                        month = '0'+month;
                                    }
                                    if(day < 10){
                                        day = '0'+day;
                                    }

                                    if(month == 1){month = 'Jan';}else if(month == 2){month = 'Feb';}else if(month == 3){month = 'Mar';}else if(month == 4){month = 'Apr';}else if(month == 5){month = 'May';}else if(month == 6){month = 'Jun';}else if(month == 7){month = 'Jul';}else if(month == 8){month = 'Aug';}else if(month == 9){month = 'Sep';}else if(month == 10){month = 'Oct';}else if(month == 11){month = 'Nov';}else if(month == 12){month = 'Dec';}

                                    theDate = `${month} ${day}, ${year}`;
                                    firstItem = `<strong>From:</strong> ${theDate}`;

                                    let theDateEnd = new Date(lastItem);
                                    theDateEnd = new Date( theDateEnd.getTime() + Math.abs(theDateEnd.getTimezoneOffset()*60000) ) ;
                                    // Clean, remove spaces and lowercase the info
                                    let dayEnd = theDateEnd.getDate();
                                    let yearEnd = theDateEnd.getFullYear();
                                    var monthEnd = new Date();
                                    var curday = function(date){
                                        monthEnd = theDateEnd.getMonth();
                                        monthEnd =  monthEnd +1;
                                        return (monthEnd);
                                    };

                                    monthEnd = curday(theDateEnd);
                                    if(monthEnd < 10){
                                        monthEnd = '0'+monthEnd;
                                    }
                                    if(dayEnd < 10){
                                        dayEnd = '0'+dayEnd;
                                    }

                                    if(monthEnd == 1){monthEnd = 'Jan';}else if(monthEnd == 2){monthEnd = 'Feb';}else if(monthEnd == 3){monthEnd = 'Mar';}else if(monthEnd == 4){monthEnd = 'Apr';}else if(monthEnd == 5){monthEnd = 'May';}else if(monthEnd == 6){monthEnd = 'Jun';}else if(monthEnd == 7){monthEnd = 'Jul';}else if(monthEnd == 8){monthEnd = 'Aug';}else if(monthEnd == 9){monthEnd = 'Sep';}else if(monthEnd == 10){monthEnd = 'Oct';}else if(monthEnd == 11){monthEnd = 'Nov';}else if(monthEnd == 12){monthEnd = 'Dec';}

                                    theDateEnd = `${monthEnd} ${dayEnd}, ${yearEnd}`;

                                    lastItem = `<strong>To:</strong> ${theDateEnd}`;
                                                                            
                                    var tag = ` <li data-time-tag="true" data-info="date">${firstItem}  ${lastItem}<span class="tag-close">x</span></li>`;
                                    firstItem = `From: ${theDate}`;
                                    lastItem = `To: ${theDateEnd}`;
                                    $('.calendar__input').val(`${firstItem}  ${lastItem}`);
                                    tags.push(tag);
                                    }


                            }
                        }
                    }
                }

                if(index === 4 ){
                    var theClass =$(`.form [data-value="${tag}"`);
                    if(theClass.length){
                        theClass = theClass[0].innerHTML;
                        if(theClass === "City" || theClass === "city"){
                        }else{
                            var tag = ` <li data-info=".${tag}" data-tag-type="type">${theClass} <span class="tag-close">x</span></li>`;
                            tags.push(tag);
                        }
                    }
                }
                if(index === 5 ){
                    var theClass =$(`.form [data-value="${tag}"`);
                    if(theClass.length){
                        theClass = theClass[0].innerHTML;
                        if(theClass === "City" || theClass === "city"){
                        }else{
                            var tag = ` <li data-info=".${tag}" data-tag-type="type">${theClass} <span class="tag-close">x</span></li>`;
                            tags.push(tag);
                        }
                    }
                }

            }
            // We clean old data for the tags
            $("#searchTags li").remove();
            var NewTags = [];

            tags.map((element) =>{
                if(element.includes("Issue")){

                }else{
                    NewTags.push(element);
                }
            })

            tags = NewTags; 

            if(tags.length){
                    var fullWrapper = `<ul id="searchTags" ></ul><p>Clear search</p>`;
                    $('.search__sub__wrapper').empty();
                    $('.search__sub__wrapper').append(fullWrapper);
                    $('.searchTagsWrapper').show();
                    for (let index = 0; index < tags.length; index++) {
                        var tag = tags[index];
                        $("#searchTags").append(tag); 
                    }
            }else{
                $('.searchTagsWrapper').hide();
            }
    }
    // We print the tag selected into the 
    
    var removedTag = JSON.parse(localStorage.getItem('removedTag'));
    var tags = new Array();
    // Return de final data
    return theCards;
}
// ====== END OF curatedCards() - Curates cards function ====== // 



// ============================================================================//
// ============================================================================//
// ============================= Page Click Events ============================//
// ============================================================================//
// ============================================================================//

// ====== Create the popup after one event its clicked ====== // 
var city = '', context = '', eventID = '', communityID = '', name = '';

$(document).on("click", " .card" , function() {
    // we check that no other popup exist before printing a new one
    if($('.popup__parent').length){
        var element = document.getElementsByClassName('popup__parent');
        element[0].remove();
    }
    
    $('body').css('overflow', 'hidden');

    // We get the data from the card for the popup
    let eventID = $(this).attr('data-event-id');
    let address = $(this).attr('data-full-address');
    let communityID = $(this).attr('data-event-community');
    let venue = $(this).attr('data-event-venue');
    let date = $(this).attr('data-event-date');
    let time = $(this).attr('data-event-time');
    let name = $(this).attr('data-event-name');
    let end = $(this).attr('data-event-end');
    let city = $(this).attr('data-event-city');
    let context = $(this).attr('data-event-context');
    let emailRegistration = $(this).attr('data-event-email-registration'); 
    let registrationInfo = $(this).attr('data-event-registration').replace(/ /g, '').replace(/,/g, '').replace(/\//g, '').replace(/\./g, '').replace("@", '').replace("#", '').replace("$", '').replace("%", '').replace("^", '').replace("*", '').replace("_", '').replace("+", '').replace("<", '').replace(">", '').replace("§", '').replace("±", '').toLowerCase();  
    let formID = $(this).find('.registration__custom__link a').attr('href'); 
    let partnerLink = $(this).attr('data-event-partner-link'); 
    let partner = $(this).attr('data-event-partner'); 
    let isOngoing = $(this).attr('data-ongoing'); 
    let isVirtual = $(this).attr('data-isvirtual'); 
    let timezone = $(this).attr('data-timezone'); 
    let issue = $(this).attr('data-issue'); 
    let serveLink = $(this).attr('data-servelink'); 

    
    if(!partnerLink.includes('https')){
        partnerLink = `https://${partnerLink}`;
    }
    if(window.location.href.substring(0, window.location.href.indexOf("?")).length > 0){
        var windowLink = window.location.href.substring(0, window.location.href.indexOf("?"));
        window.history.replaceState("loaded-popup", "share-popup", `${windowLink}?popupId=${eventID}`);
    }else{
        var windowLink = window.location.href.substring(0, window.location.href.indexOf("?"));
        window.history.replaceState("loaded-popup", "share-popup", `${window.location.href}?popupId=${eventID}`);
    }
    
    compareCards =  JSON.parse(localStorage.getItem('cards'));
    var description = compareCards.filter(event => event.id === eventID);

    // Date
    let currentDate = new Date(date);
    currentDate = new Date( currentDate.getTime() + Math.abs(currentDate.getTimezoneOffset()*60000) ) ;
    var month = currentDate.getMonth();
    var day = currentDate.getDate();
    var year =  currentDate.getFullYear();
    
    if(month == 0){month = 'Jan';}else if(month == 1){month = 'Feb';}else if(month == 2){month = 'Mar';}else if(month == 3){month = 'Apr';}else if(month == 4){month = 'May';}else if(month == 5){month = 'Jun';}else if(month == 6){month = 'Jul';}else if(month == 7){month = 'Aug';}else if(month == 8){month = 'Sep';}else if(month == 9){month = 'Oct';}else if(month == 10){month = 'Nov';}else if(month == 11){month = 'Dec';}

    // we check that no other popup exist before printing a new one
    if($('.popup__parent').length){
        var element = document.getElementsByClassName('popup__parent');
        element[0].remove();
    }

    newCity = false;
    if(city === 'brooklyn' || city === 'harlem' || city === 'ny'){
        newCity = 'nyc';
    }
    var rightForm = '';
    var miamiForm = 
    `
    
    `;
    // `city is miami
    if(city === 'miami'){
        rightForm = miamiForm;
    // Family and not miami/nyc
    }else if(context.includes('fam') && newCity != 'nyc' && city != 'miami'){
        rightForm = 
        `         
        `;
    // Familiar and NY
    }else if(context.includes('fam') && newCity === 'nyc'){
        rightForm = 
        `
        `;
    }
    // Not familiar and NYC
    else if(!context.includes('fam') && newCity === 'nyc'){
        rightForm =  ``;
    }
    // All the other events
    else{
        rightForm =  ``;
        
    }

    if(registrationInfo === 'email'){
        var registrationHtml = 
        `
        <div class="form_send_email">
            <a href="mailto:${emailRegistration}?subject='Registration for ${name} on ${month} ${day}, ${year}'" target="_BLANK">
                SEND US AN EMAIL!
            </a>
        </div>
    `;

    }else if(registrationInfo === 'online'){
        var registrationHtml = rightForm;
    }else if(registrationInfo === 'partnerexternallink'){
        var registrationHtml = 
        `
        <div class="form_send_email">
            <a href="${partnerLink}" target="_BLANK">
                REGISTER HERE
            </a>
        </div>
    `;
    }else {
        var registrationHtml = 
        `
        <div class="form_send_email">

        </div>
        `;
    }

    if(time === 'no-time'){
        var columnNumber = "6";
        var columnHide = 'style="display:none;"';
    }else{
        time = time.substr(0, time.lastIndexOf(":0"));
        var timeChars = time.substring(0, 2);
        if(parseInt(timeChars) >= 12){
            var stamp = 'PM';
        }else{
            var stamp = 'AM';
        }


        newTime = time.split(':');
        var finalTimeStart = '';

        if(newTime[0] === '01'){finalTimeStart=`1:${newTime[1]}`;}
        if(newTime[0] === '02'){finalTimeStart=`2:${newTime[1]}`;}
        if(newTime[0] === '03'){finalTimeStart=`3:${newTime[1]}`;}
        if(newTime[0] === '04'){finalTimeStart=`4:${newTime[1]}`;}
        if(newTime[0] === '05'){finalTimeStart=`5:${newTime[1]}`;}
        if(newTime[0] === '06'){finalTimeStart=`6:${newTime[1]}`;}
        if(newTime[0] === '07'){finalTimeStart=`7:${newTime[1]}`;}
        if(newTime[0] === '08'){finalTimeStart=`8:${newTime[1]}`;}
        if(newTime[0] === '09'){finalTimeStart=`9:${newTime[1]}`;}
        if(newTime[0] === '10'){finalTimeStart=`10:${newTime[1]}`;}
        if(newTime[0] === '11'){finalTimeStart=`11:${newTime[1]}`;}
        if(newTime[0] === '12'){finalTimeStart=`12:${newTime[1]}`;}
        if(newTime[0] === '13'){finalTimeStart=`1:${newTime[1]}`;}
        if(newTime[0] === '14'){finalTimeStart=`2:${newTime[1]}`;}
        if(newTime[0] === '15'){finalTimeStart=`3:${newTime[1]}`;}
        if(newTime[0] === '16'){finalTimeStart=`4:${newTime[1]}`;}
        if(newTime[0] === '17'){finalTimeStart=`5:${newTime[1]}`;}
        if(newTime[0] === '18'){finalTimeStart=`6:${newTime[1]}`;}
        if(newTime[0] === '19'){finalTimeStart=`7:${newTime[1]}`;}
        if(newTime[0] === '20'){finalTimeStart=`8:${newTime[1]}`;}
        if(newTime[0] === '21'){finalTimeStart=`9:${newTime[1]}`;}
        if(newTime[0] === '22'){finalTimeStart=`10:${newTime[1]}`;}
        if(newTime[0] === '23'){finalTimeStart=`11:${newTime[1]}`;}
        if(newTime[0] === '24'){finalTimeStart=`12:${newTime[1]}`;}

        var columnNumber = "4";
        var columnHide = 'style="display:block;"';    
        if(end){
            var timeCharsEnd = end.substring(0, 2);
            if(parseInt(timeCharsEnd) >= 12){
                var stampEnd = 'PM';
            }else{
                var stampEnd = 'AM';
            }

            end = end.substr(0, end.lastIndexOf(":0"));

            newTime = end.split(':');
            var finalEnd = '';

            if(newTime[0] === '01'){finalEnd=`1:${newTime[1]}`;}
            if(newTime[0] === '02'){finalEnd=`2:${newTime[1]}`;}
            if(newTime[0] === '03'){finalEnd=`3:${newTime[1]}`;}
            if(newTime[0] === '04'){finalEnd=`4:${newTime[1]}`;}
            if(newTime[0] === '05'){finalEnd=`5:${newTime[1]}`;}
            if(newTime[0] === '06'){finalEnd=`6:${newTime[1]}`;}
            if(newTime[0] === '07'){finalEnd=`7:${newTime[1]}`;}
            if(newTime[0] === '08'){finalEnd=`8:${newTime[1]}`;}
            if(newTime[0] === '09'){finalEnd=`9:${newTime[1]}`;}
            if(newTime[0] === '10'){finalEnd=`10:${newTime[1]}`;}
            if(newTime[0] === '11'){finalEnd=`11:${newTime[1]}`;}
            if(newTime[0] === '12'){finalEnd=`12:${newTime[1]}`;}
            if(newTime[0] === '13'){finalEnd=`1:${newTime[1]}`;}
            if(newTime[0] === '14'){finalEnd=`2:${newTime[1]}`;}
            if(newTime[0] === '15'){finalEnd=`3:${newTime[1]}`;}
            if(newTime[0] === '16'){finalEnd=`4:${newTime[1]}`;}
            if(newTime[0] === '17'){finalEnd=`5:${newTime[1]}`;}
            if(newTime[0] === '18'){finalEnd=`6:${newTime[1]}`;}
            if(newTime[0] === '19'){finalEnd=`7:${newTime[1]}`;}
            if(newTime[0] === '20'){finalEnd=`8:${newTime[1]}`;}
            if(newTime[0] === '21'){finalEnd=`9:${newTime[1]}`;}
            if(newTime[0] === '22'){finalEnd=`10:${newTime[1]}`;}
            if(newTime[0] === '23'){finalEnd=`11:${newTime[1]}`;}
            if(newTime[0] === '24'){finalEnd=`12:${newTime[1]}`;}


            var finalTime = `Begins: ${finalTimeStart} ${stamp} (${timezone})  Ends: ${finalEnd} ${stampEnd} (${timezone})`;
        }else{
            var finalTime = `Begins: ${finalTimeStart} ${stamp} (${timezone})`;
        }
    }
    if(!finalTimeStart && !finalEnd){
        finalTime = undefined;
    }

    // we add the popup to the DOM
    let dateInfo = false;
    let displayNone = ""; 
    let hideVenue = "";

    if(isVirtual === "false" || isVirtual === false){
        hideVenue = "";
    }else{
        hideVenue = 
        `
            <div class="date  internal__column">   

            </div>
        `
    }

    var registerButton = ""

    if(serveLink === "undefined" || serveLink === undefined){

    }else{
        if(!serveLink.includes("https")){
            serveLink = serveLink.replace(/\http/g, "https");
            serveLink = serveLink.replace(/\https/g, "https");
        }
        serveLink = serveLink.replace(/\www./g, "");

        registerButton = 
        `
        <div class="event__button col-lg-12 register__button__popup" data-iframe="${serveLink}">
            <button> REGISTER </button>
        </div>
        `;
    }

    if(isOngoing === "true"){
        dateInfo = `<p>Ongoing</p>`;
        displayNone ="hidden-column";

        if(registrationInfo === 'email'){
            var registrationHtml = 
            `
            <div class="form_send_email">
                <a href="mailto:${emailRegistration}?subject='Registration for ${name}'" target="_BLANK">
                    SEND US AN EMAIL!
                </a>
            </div>
            `;
        }
    }else{
        
        dateInfo = `<p>${month} ${day}, ${year}</p>`;
    }

    if(dateInfo.includes("undefined")){
        dateInfo =
        `

        `
        ;
    }else{
        dateInfo =
        `
        <div class="date internal__column">   
            <svg xmlns="http://www.w3.org/2000/svg" width="30.165" height="28.901" viewBox="0 0 30.165 28.901">
                <g id="Grupo_1600" data-name="Grupo 1600" transform="translate(-166.442 -925.862)">
                <path id="Trazado_2042" data-name="Trazado 2042" d="M170.182,928.376c.178-1.765.72-2.514,1.864-2.495a2.155,2.155,0,0,1,1.128.353,2.06,2.06,0,0,1,.689.916,5.11,5.11,0,0,1,.168,1.206h1.208c0-.2,0-.405,0-.608a1.884,1.884,0,0,1,3.767-.032c.006.206,0,.412,0,.639h5.028c0-.215,0-.431,0-.648a1.883,1.883,0,0,1,3.766.007c.005.206,0,.413,0,.64h1.256c0-.2,0-.4,0-.6a1.885,1.885,0,1,1,3.769-.007c0,.194,0,.389,0,.63.795,0,1.562,0,2.33,0a1.28,1.28,0,0,1,1.44,1.454q0,9.756.007,19.513a.872.872,0,0,1-.286.682c-1.507,1.492-3,3-4.509,4.486a.9.9,0,0,1-.57.242q-11.681.018-23.36.01a1.281,1.281,0,0,1-1.439-1.456q0-11.6,0-23.2c0-.131,0-.261,0-.392a1.252,1.252,0,0,1,1.324-1.333C168.565,928.37,169.362,928.376,170.182,928.376Zm25.143,6.31h-27.6v18.8h22.587c0-1.05.043-2.083-.01-3.11-.074-1.446.45-1.983,1.912-1.907,1.027.053,2.059.01,3.106.01Zm-27.606-1.311h27.593v-3.72H192.83c0,.411.006.8,0,1.191a1.251,1.251,0,0,1-1.281,1.3c-.392.007-.785.006-1.177,0a1.253,1.253,0,0,1-1.31-1.308c0-.389,0-.778,0-1.179H187.8c0,.427.009.831,0,1.234a1.246,1.246,0,0,1-1.246,1.252c-.406.011-.812.007-1.217,0a1.251,1.251,0,0,1-1.3-1.314c0-.388,0-.777,0-1.17h-5.026c0,.406,0,.784,0,1.162a1.256,1.256,0,0,1-1.336,1.323c-.353,0-.707,0-1.06,0a1.265,1.265,0,0,1-1.373-1.366c0-.375,0-.749,0-1.117h-1.256c0,.422.007.814,0,1.2a1.251,1.251,0,0,1-1.265,1.275c-.379.01-.759.005-1.138,0a1.264,1.264,0,0,1-1.365-1.373c0-.373,0-.747,0-1.121h-2.493ZM191.587,952.8l3.04-3.04h-3.04Zm-18.864-21.93c0-1.075.01-2.117-.005-3.159a.6.6,0,0,0-.613-.591.587.587,0,0,0-.62.535c-.02,1.066-.008,2.132-.008,3.215Zm3.776-.01h1.252c0-1.055.008-2.084,0-3.113a.622.622,0,0,0-1.244-.011C176.49,928.768,176.5,929.8,176.5,930.862Zm10.046.01c0-1.075.01-2.118-.005-3.16a.607.607,0,0,0-.613-.591.6.6,0,0,0-.626.574c-.017,1.053-.006,2.106-.006,3.177Zm5.029,0c0-1.05,0-2.054,0-3.059a.63.63,0,1,0-1.252.016c-.005.718,0,1.436,0,2.154v.889Z" fill="#015d5d"/>
                <path id="Trazado_2043" data-name="Trazado 2043" d="M185.293,944.711c0,1.4,0,2.742,0,4.088,0,.772-.168.939-.946.939H172.331c-.67,0-.861-.191-.861-.864q0-4.83,0-9.659c0-.561.224-.787.782-.787h18.533c.564,0,.789.218.79.778q0,2.376,0,4.751c0,.525-.238.754-.776.754q-2.435,0-4.869,0Zm-7.565-1.264v-3.734h-4.97v3.734Zm1.305-3.755v3.734H184v-3.734Zm6.288.008v3.735h4.974V939.7Zm-7.6,8.763v-3.722h-4.979v3.722Zm1.314-3.738v3.735h4.973v-3.735Z" fill="#015d5d"/>
                </g>
            </svg>
            ${dateInfo}
        </div>
        `
        ;
    }

    if(finalTime === undefined || finalTime === "undefined"){
        finalTime = 
        `
     
        `
    }else{
        finalTime = 
        `
        <div class="date  internal__column">   
            <svg xmlns="http://www.w3.org/2000/svg" width="29.297" height="29.298" viewBox="0 0 29.297 29.298">
                <g id="Grupo_1601" data-name="Grupo 1601" transform="translate(-166.876 -1042.67)">
                <path id="Trazado_2044" data-name="Trazado 2044" d="M181.505,1071.536a14.218,14.218,0,1,1,14.237-14.2A14.236,14.236,0,0,1,181.505,1071.536Zm.015-25.845a11.628,11.628,0,1,0,11.633,11.623A11.627,11.627,0,0,0,181.52,1045.691Z" fill="#015d5d" stroke="#fff" stroke-miterlimit="10" stroke-width="0.862"/>
                <path id="Trazado_2045" data-name="Trazado 2045" d="M180.238,1053.433c0-1.292-.005-2.583,0-3.875a1.3,1.3,0,0,1,.992-1.254,1.266,1.266,0,0,1,1.451.721,1.717,1.717,0,0,1,.123.672q.014,3.391,0,6.782a.673.673,0,0,0,.226.525q1.614,1.6,3.212,3.209a1.285,1.285,0,0,1-.3,2.146,1.2,1.2,0,0,1-1.31-.137,3.978,3.978,0,0,1-.422-.389c-1.143-1.141-2.279-2.289-3.43-3.421a1.694,1.694,0,0,1-.551-1.316C180.254,1055.876,180.238,1054.654,180.238,1053.433Z" fill="#015d5d" stroke="#fff" stroke-miterlimit="10" stroke-width="0.862"/>
                </g>
            </svg>
    
            <p>${finalTime}</p>
        </div>
        `
    }

    if(address.length < 1){
       address =``;
    }else{
        address =
        `
        <div class="date  internal__column">   
            <svg xmlns="http://www.w3.org/2000/svg" width="24.942" height="33.245" viewBox="0 0 24.942 33.245">
                <g id="Grupo_1602" data-name="Grupo 1602" transform="translate(-169.05 -1130.555)">
                <path id="Trazado_2046" data-name="Trazado 2046" d="M182.365,1130.805c.73.126,1.469.211,2.187.385a12.307,12.307,0,0,1,9.047,9.752,11.051,11.051,0,0,1-1,6.587,46.21,46.21,0,0,1-4.532,7.654,99.3,99.3,0,0,1-6.205,7.876c-.1.111-.2.219-.326.364-.236-.269-.459-.519-.677-.774a91.235,91.235,0,0,1-7.574-10.027,34.652,34.652,0,0,1-3.3-6.332,10.231,10.231,0,0,1,.332-8.077,12.009,12.009,0,0,1,9.329-7.263c.353-.064.712-.1,1.068-.145Zm-.836,29.564c.127-.146.215-.238.293-.338,1.439-1.839,2.916-3.649,4.3-5.526a40.7,40.7,0,0,0,4.618-7.676,9.419,9.419,0,0,0,.881-5.317,10.2,10.2,0,0,0-19.421-2.562,8.488,8.488,0,0,0-.231,6.953,38.245,38.245,0,0,0,1.841,3.8,66.687,66.687,0,0,0,6.295,8.947C180.566,1159.22,181.038,1159.776,181.529,1160.369Z" fill="#015d5d" stroke="#fff" stroke-miterlimit="10" stroke-width="0.5"/>
                <path id="Trazado_2047" data-name="Trazado 2047" d="M175.421,1143.028a6.116,6.116,0,1,1,6.074,6.126A6.116,6.116,0,0,1,175.421,1143.028Zm2.038,0a4.078,4.078,0,1,0,4.115-4.064A4.083,4.083,0,0,0,177.459,1143.025Z" fill="#015d5d" stroke="#fff" stroke-miterlimit="10" stroke-width="0.5"/>
                </g>
            </svg>
        
            <p>${address.replace(/,/g, '')}</p>
        </div>
        `;
    }

    let shareableLink = window.location.href; 

    var popup = document.createElement("div");
        popup.setAttribute('class', 'popup__parent');
        popup.innerHTML = 
    `
    <div class="popup__wrapper">
        <div class="close__background"></div>
        <div class="container">
            <div class="row row__title">
                <div class="col-md-12 col__title">
                    <div class="close__popup">
                        <p>╳</p>
                    </div>
                </div>
            </div>
            <div class="row three__col">
                <div class="col-sm-12 col-md-12 popup__content">
                    <div class="main__popup__data col-sm-12 col-md-12">   
                        <div class="event__title">
                            <h2>${name}</h2>
                        </div>
                        
                        <div class="event__description">
                            <p>${description[0].promo}</p>
                        </div>
                    </div>

                    
                    ${dateInfo}
                    ${finalTime}
                    ${address}
                    ${hideVenue}

                    
                    ${registerButton}

                </div>
            </div>
        </div>
    </div>
    `;
    
    document.body.appendChild(popup);

    let theColumns = [...document.querySelectorAll(".internal__column")];

    setTimeout(function(){
        [...document.querySelectorAll(".internal__column")].map((element, index) => {
            if(element === undefined || element === "undefined"){


            }else{
                if(index % 2 === 0 ){
                    element.classList.add("col-sm-12");
                    element.classList.add("col-md-4");
                }else{
                    element.classList.add("col-sm-12");
                    element.classList.add("col-md-8");
                }
            }
    
            return true;
        })
    }, 50)

    
    // Not Miami, not familiar and not from new york
    if(city != 'miami' && !context.includes('Family') && !newCity){
        $("#tfa_332").val(name);
        $("#tfa_615").val(eventID);
        $("#tfa_552").val(communityID);

    // City is Miami
    }else if(city === 'miami' ){
        $("#tfa_332").val(name);
        $("#tfa_615").val(eventID);
        $("#tfa_552").val(communityID);
    }

    // Its familiar but not NYC
    else if(context.includes('Fam') && newCity != 'nyc'){
        $("#tfa_2231").val(name);
        $("#tfa_801").val(eventID);
        $("#tfa_871").val(communityID);

    // Its Familiar And from NY
    }else if(context.includes('fam') && newCity === 'nyc'){
        $("#tfa_2231").val(name);
        $("#tfa_615").val(eventID);
        $("#tfa_552").val(communityID);
        $("#tfa_2228").prop("checked", true);

    // Its NYC but its not familiar
    }else  if(!context.includes('fam') && newCity === 'nyc'){
        $("#tfa_332").val(name);
        $("#tfa_615").val(eventID);
        $("#tfa_552").val(communityID);
        $("#tfa_644").prop("checked", true);

    // Any other combination
    }else{
        $("#tfa_332").val(name);
        $("#tfa_615").val(eventID);
        $("#tfa_552").val(communityID);
    }
    
    $('#4741631 #tfa_855').addClass('hidden-group');
    $('#4741631 #tfa_855 input').removeClass('active');
    $('#4741631 #tfa_858').addClass('hidden-group');
    $('#4741631 #tfa_858 input').removeClass('active');
    $('#4741631 #tfa_862').addClass('hidden-group');
    $('#4741631 #tfa_862 input').removeClass('active');
    $('#4741631 #tfa_821 input').addClass('active');
    $('#4741631 #tfa_729 input').addClass('active');
    $('#4770353 #tfa_821 input').addClass('active');
    $('#4770353 #tfa_729 input').addClass('active');
    // Familiar NYC form
    $('#4770353 #tfa_684').addClass('hidden-group');
    $('#4770353 #tfa_757').addClass('hidden-group');
    $('#4770353 #tfa_767-D').addClass('hidden-group');
    $('#4770353 #tfa_862').addClass('hidden-group');
    // new fields for nyc form
    $('.nycfamform #tfa_855').addClass('hidden-group');
    $('.nycfamform #tfa_858').addClass('hidden-group');
    $('.nycfamform #tfa_862').addClass('hidden-group');
    $('.nycfamform #tfa_785').addClass('hidden-group');
    // new fields for family form
    $('.allfamilyevents #tfa_855').addClass('hidden-group');
    $('.allfamilyevents #tfa_858').addClass('hidden-group');
    $('.allfamilyevents #tfa_862').addClass('hidden-group');
    $('.allfamilyevents #tfa_785').addClass('hidden-group');

}); 
// ====== END OF Create the popup after one event its clicked ====== // 

// ====== click event that handles the close popup ====== // 
$(document).on("click", ".close__popup" , function() {
    $('.popup__parent').remove();
    $('.popup__parent__contact').hide();
    $('body').css('overflow', 'unset');

    history.pushState(null, '', `/volunteer`);    
});

$(document).on("click", ".close__background" , function(event) {
    event.preventDefault();
    $('.popup__parent').remove();
    $('.popup__parent__contact').hide();
    $('body').css('overflow', 'unset');

    history.pushState(null, '', `/volunteer`);    
});
// ====== END OF click event that handles the close popup ====== // 

// ====== This code handle the reset of the nice select fields once an option its selected ====== //
$(document).on("click", "#cities .disabled" , function() {
    $(`#searchTags [data-tag-type='city']`).remove();
    $('#cities select').niceSelect('update');
    var remainTags = $('#searchTags li');
    if(remainTags.length === 0 ){
        $('.searchTagsWrapper').hide();
    }
});

$(document).on("click", ".nice-select" , function() {
    $('.select_options').removeClass('open');
});

$('.events__container').click(function(){
    $('.select_options').removeClass('open');
});

$('.searchTagsWrapper').click(function(){
    $('.select_options').removeClass('open');
});
// ====== END OF This code handle the reset of the nice select fields once an option its selected ====== //

// ====== Code for when search button its clicked ====== //
$('#search-events').click(function(event){
    event.preventDefault(event);

    // Array for the dates
    var searchData = new Array();
    var inputOptions = Array.from($( ".issues__wrapper .select_options input:checked" ));
    
    if(inputOptions.length){
        var inputChecked = new Array();
        inputOptions.forEach(element => {
            inputChecked.push($(element).val());
        });
    }else{
        var inputChecked = null;
    }

    var citySearch = $('.city__input .option.selected').attr('data-value');
    var nyc = false;

    if(citySearch === 'nyc'){
        var nyc = citySearch;
        citySearch = ['harlem', 'brooklyn', 'ny'];
        var currentValue = $(`.city__input .nice-select .list [data-value="${nyc}"]`);
        if(currentValue.length){
            $(`.city__input .nice-select .list li`).removeClass('selected');
            $(`.city__input .nice-select .list [data-value="${nyc}"]`).addClass('selected');
            currentValue = currentValue[0].innerHTML;
            $(`.city__input .nice-select .current`)[0].innerHTML = currentValue;
        }
    }else{
        if(citySearch == '-1'){
            citySearch = null;
        }else{
            var currentValue = $(`.city__input .nice-select .list [data-value="${citySearch}"]`);
            if(currentValue.length){
                $(`.city__input .nice-select .list li`).removeClass('selected');
                $(`.city__input .nice-select .list [data-value="${citySearch}"]`).addClass('selected');
                currentValue = currentValue[0].innerHTML;
                $(`.city__input .nice-select .current`)[0].innerHTML = currentValue;
            }
        }
    }

    var interestSearch = $('#interest').val();
    var partnerSearch = $('#partner').val();
    var dateSearch = JSON.parse(localStorage.getItem('finalInputsRange'));

    var typeEvent = $('.type__input .option.selected').attr('data-value');
    // Create the array for the search Dates
    var datesArray = new Array();
    datesArray.push(dateSearch);
    datesArray.sort();
    searchData.push(citySearch);
    searchData.push(inputChecked);
    searchData.push(interestSearch);
    searchData.push(datesArray);
    searchData.push(typeEvent);
    searchData.push(partnerSearch);

    console.log(searchData);

    if(searchData[3][0] === null || searchData[3][0] === undefined ){
        TimeRange = false;
    }else{
        TimeRange = true;
    }
    
    localStorage.setItem('searchData', JSON.stringify(searchData));
    
    apiCallData =  JSON.parse(localStorage.getItem('cards'));
    
    theCards = formatDataEvents(apiCallData, searchData, null,  TimeRange);

    changePage(0, theCards, searchData);
    setTimeout(
    function() {
        if(nyc){
            var currentValue = $(`.city__input .nice-select .list [data-value="${nyc}"]`);
            if(nyc.length){
                $(`.city__input .nice-select .list li`).removeClass('selected');
                $(`.city__input .nice-select .list [data-value="${nyc}"]`).addClass('selected');
                currentValue = currentValue[0].innerHTML;
                $(`.city__input .nice-select .current`)[0].innerHTML = currentValue;
            }
        }else{
            var currentValue = $(`.city__input .nice-select .list [data-value="${citySearch}"]`);
            if(currentValue.length){
                $(`.city__input .nice-select .list li`).removeClass('selected');
                $(`.city__input .nice-select .list [data-value="${citySearch}"]`).addClass('selected');
                currentValue = currentValue[0].innerHTML;
                $(`.city__input .nice-select .current`)[0].innerHTML = currentValue;
            }
        }

        if($("[data-value='nyc']").length > 1){
            $("[data-value='nyc']")[0].remove();
        }
    }, 10);
});   
// ====== END OF Code for when search button its clicked ====== //

// ====== This is the action to remove the tags ====== //
$(document).on("click", "#searchTags li" , function(e) {
    $('#searchTags').innerHTML = '';
    var removeTag = $(this).attr('data-info');     
    if($(this).attr('data-time-tag') === 'true'){
        localStorage.removeItem('finalInputsRange');
        $('.calendar__input').val('Calendar');
    }
    var resetFilter = removeTag.replace(/\./g, "");
    
    $(e.target).parent().remove();
    $(`.select_simulator ${$(this).attr('data-info')}`).prop('checked', false); 
    $(`${removeTag}`).parent().prop('selectedIndex',0);
    var parentFilter = $(`[data-value="${resetFilter}"]`).parent().parent().parent().children()[0];
    var elementInput = $(`[data-value="${resetFilter}"]`).removeClass('selected focus');


    $(parentFilter).niceSelect('update');
    var inputOptions = Array.from($( ".issues__wrapper .select_options input:checked" ));
    
    if(inputOptions.length){
        var inputChecked = new Array();
        inputOptions.forEach(element => {
            inputChecked.push($(element).val());
        });
    }else{
        var inputChecked = null;
    }

    var remainTags = $('#searchTags li');
    if(remainTags.length === 0 ){
        $('.searchTagsWrapper').hide();
    }else{
        if(remainTags[0].innerText === "Issue x"){
            setTimeout(function(){
                if($(`[data-info=".-1"]`)[0]){
                    $(`[data-info=".-1"]`)[0].remove();
                    $('.searchTagsWrapper').hide();
                }
            }, 100)
        }
        if(remainTags[0].innerText === "Issue x"){
            setTimeout(function(){

                if($(`[data-info=".-1"]`)[0]){
                    $(`[data-info=".-1"]`)[0].remove();
                    $('.searchTagsWrapper').hide();
                }
            }, 100)
        }
    }
    var searchData = new Array();
    //var datesArray = new Array('06/30/2019', '05/17/2019', '01/22/2019');
    var parentFilterId = $(parentFilter).attr('id');

    if($(parentFilter).attr('id') === 'cities'){
        citySearch = null;
        $('.city__input .option.selected').removeClass('selected');
        $('.city__input .disabled').addClass('selected focus');
        
        document.querySelector('.city__input .nice-select .current').innerHTML = 'City';
    }else{
        var citySearch = $('.city__input .option.selected').attr('data-value');

        if(citySearch === 'nyc'){
            citySearch = ['harlem', 'brooklyn', 'ny'];
        }
        if(citySearch == '-1'){
            citySearch = null;
        }
    }

    var interestSearch = $('#interest').val();
    var dateSearch = JSON.parse(localStorage.getItem('finalInputsRange'));
    var typeEvent = $('.type__input .option.selected').attr('data-value');
    // Create the array for the search Dates
    var datesArray = new Array();
    datesArray.push(dateSearch);
    datesArray.sort();
    searchData.push(citySearch);
    searchData.push(inputChecked);
    searchData.push(interestSearch);
    searchData.push(datesArray);
    searchData.push(typeEvent);


    if(searchData[3][0] === null || searchData[3][0] === undefined ){
        TimeRange = false;
    }else{
        TimeRange = true;
    }

    apiCallData =  JSON.parse(localStorage.getItem('cards'));
    theCards = formatDataEvents(apiCallData, searchData, null, TimeRange);

    changePage(0, theCards);
})
// ====== END OF This is the action to remove the tags ====== //

$(document).on("click", ".register__button__popup" , function(e) {
    e.preventDefault();

    if (window.innerWidth > 800) {
        $('.popup__parent').remove();
        $('.popup__parent__contact').hide();
        $('body').css('overflow', 'unset');
    
        history.pushState(null, '', `/volunteer`); 
        
        var popup = document.createElement("div");
            popup.setAttribute('class', 'popup__parent popup__register');
            popup.innerHTML = 
        `
        <div class="popup__wrapper popup__register__iframe">
            <div class="close__background"></div>
            <div class="container">
                <div class="row row__title">
                    <div class="col-md-12 col__title">
                        <div class="close__popup">
                            <p>╳</p>
                        </div>
                    </div>
                </div>
                <div class="row three__col">
                    <div class="col-sm-12 col-md-12 popup__content">
                        <iframe id="custom__frame" src="${e.target.getAttribute("data-iframe")}" frameborder="0"></iframe>
                        <div class="lds-ring frame__loader"><div></div><div></div><div></div><div></div></div>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        document.body.appendChild(popup);

        setTimeout(function(){
            $('.frame__loader').addClass("dont__disturbe")
        }, 500);

        $('#custom__frame').on('load', function() {
            $('.frame__loader').fadeOut(500);
        });

    }else{
        window.open(e.target.getAttribute("data-iframe"), '_blank');
    }
})

// ====== this click event controls the removing of the .searchTagsWrapper p element on click ====== //
$(document).on("click", ".searchTagsWrapper p" , function() {
    $('.issues__wrapper input').prop('checked', false);
    $('.select_options').removeClass('open');
    $('#searchTags li').remove();
    $('.searchTagsWrapper').hide();
    var searchData = new Array();
    $('#cities').prop('selectedIndex',0);
    $('#partner').prop('selectedIndex',0);
    $('#interest').prop('selectedIndex',0);
    $('#issues').prop('selectedIndex',0);
    $('#types').prop('selectedIndex',0);
    $('.nice-select li').removeClass('selected focus');
    $('.nice-select li.disabled').removeClass().addClass('option selected disabled focus');
    var searchData = null;
    var TimeRange = false;
    var removeTag = null;


    $('select').niceSelect('update');
    localStorage.removeItem('finalInputsRange');
    apiCallData =  JSON.parse(localStorage.getItem('cards'));
    theCards = formatDataEvents(apiCallData, searchData, removeTag, TimeRange);
    $('.calendar__input').val('Date');
    changePage(0, theCards);

})
// ====== END OF this click event controls the removing of the .searchTagsWrapper p element on click ====== //

// ====== This click events changes the arrow direction on the input on the search field ====== //
$(".input__wrapper").click(function(){
    $(this).removeClass('arrow-down');
    $(this).addClass('arrow-up');
})
$(".input__wrapper").mouseleave(function(){
    $(this).addClass('arrow-down');
    $(this).removeClass('arrow-up');
})
$("input").click(function(){
    $(this).parent().removeClass('arrow-down');
    $(this).parent().addClass('arrow-up');
})
$("input").mouseleave(function(){
    $(this).parent().addClass('arrow-down');
    $(this).parent().removeClass('arrow-up');
})
// ====== END OF This click events changes the arrow direction on the input on the search field ====== //

// ======  This click event controls the pagination  ====== //
$(document).on("click", ".pagination-btn" , function() {
    var inputOptions = Array.from($( ".issues__wrapper .select_options input:checked" ));
    
    if(inputOptions.length){
        var inputChecked = new Array();
        inputOptions.forEach(element => {
            inputChecked.push($(element).val());
        });
    }else{
        var inputChecked = null;
    }

    var searchData = JSON.parse(localStorage.getItem('searchData'));
    if(searchData === null){
       searchData = [];
    }
    var datesArray = new Array('06/30/2019', '05/17/2019', '01/22/2019');

    var citySearch = $('.city__input .option.selected').attr('data-value');
    
    if(citySearch === 'nyc'){
        citySearch = ['harlem', 'brooklyn', 'ny'];
    }
    if(citySearch == '-1'){
        citySearch = null;
    }
    var interestSearch = $('#interest').val();
    if(interestSearch = -1){
        interestSearch = null;
    }
    var dateSearch = JSON.parse(localStorage.getItem('finalInputsRange'));
    var typeEvent = $('.type__input .option.selected').attr('data-value');
    // Create the array for the search Dates
    var datesArray = new Array();
    datesArray.push(dateSearch);
    datesArray.sort();
    searchData.push(citySearch);
    searchData.push(inputChecked);
    searchData.push(interestSearch);
    searchData.push(datesArray);
    searchData.push(typeEvent);
    

    if(searchData[3][0] === null || searchData[3][0] === undefined ){
        TimeRange = false;
    }else{
        TimeRange = true;
    }

    page = parseInt($(this).attr('data-page'));

    if($(window).width() > 500) {
        $('html, body').animate({
            scrollTop: $("#opportunities__title").offset().top
        }, 400);
    }else{
        $('html, body').animate({
            scrollTop: $("#opportunities__title").offset().top
        }, 400);
    }

    apiCallData =  JSON.parse(localStorage.getItem('cards'));
    theCards = formatDataEvents(apiCallData, searchData, null, TimeRange);

    changePage(page, theCards);
})
$(document).on("keydown", ".pagination-btn" , function(e) {
    
    if (e.type === 'keydown'){
        if(parseInt(e.which) === 32 || parseInt(e.which) === 13){
            var inputOptions = Array.from($( ".issues__wrapper .select_options input:checked" ));
            
            if(inputOptions.length){
                var inputChecked = new Array();
                inputOptions.forEach(element => {
                    inputChecked.push($(element).val());
                });
            }else{
                var inputChecked = null;
            }
        
            var searchData = new Array();
            var datesArray = new Array('06/30/2019', '05/17/2019', '01/22/2019');
        
            var citySearch = $('.city__input .option.selected').attr('data-value');
            
            if(citySearch === 'nyc'){
                citySearch = ['harlem', 'brooklyn', 'ny'];
            }
            if(citySearch == '-1'){
                citySearch = null;
            }
            var interestSearch = $('#interest').val();
            if(interestSearch = -1){
                interestSearch = null;
            }
            var dateSearch = JSON.parse(localStorage.getItem('finalInputsRange'));
            var typeEvent = $('.type__input .option.selected').attr('data-value');
            // Create the array for the search Dates
            var datesArray = new Array();
            datesArray.push(dateSearch);
            datesArray.sort();
            searchData.push(citySearch);
            searchData.push(inputChecked);
            searchData.push(interestSearch);
            searchData.push(datesArray);
            searchData.push(typeEvent);
            
        
            if(searchData[3][0] === null || searchData[3][0] === undefined ){
                TimeRange = false;
            }else{
                TimeRange = true;
            }
        
            page = parseInt($(this).attr('data-page'));
        
            if($(window).width() > 500) {
                $('html, body').animate({
                    scrollTop: $("#opportunities__title").offset().top
                }, 400);
            }else{
                $('html, body').animate({
                    scrollTop: $("#opportunities__title").offset().top
                }, 400);
            }
        
            apiCallData =  JSON.parse(localStorage.getItem('cards'));
            theCards = formatDataEvents(apiCallData, searchData, null, TimeRange);
        
            changePage(page, theCards);
        }
    }
})
// ======  END OF This click event controls the pagination  ====== //

// ======  This click event controls the validation for the form popups ====== //
$(document).on('click touch', '.popup__parent #submit_button', function(event){
    event.preventDefault();
    var formTextArea = Array.from($('.popup__parent #tfa_187 textarea').not('.cellphone').not('#tfa_4').not('#tfa_495'));
    var formInputs = Array.from($('.popup__parent #tfa_187 input').not('.cellphone').not('#tfa_4').not('#tfa_495'));
    
    formTextArea.forEach(textarea => {
        if($(textarea).val() === ''){
            $(textarea).addClass('error-form');
            var message = `<p class="error-custom-message">This field is required</p>`;
            var parentElement = $(textarea).parent( ".inputWrapper" );
            (parentElement).find('.error-custom-message').remove();
            $(parentElement).append(message);
        }else{
            $(textarea).removeClass('error-form');
            var parentElement = $(textarea).parent( ".inputWrapper" );
                $(parentElement).find('.error-custom-message').remove();
        }
    });
    formInputs.forEach(input => {
        if($(input).val() === ''){
            $(input).addClass('error-form');
            var message = `<p class="error-custom-message">This field is required</p>`;
            var parentElement = $(input).parent( ".inputWrapper" );
            (parentElement).find('.error-custom-message').remove();
            $(parentElement).append(message);
        }else{
            $(input).removeClass('error-form');
            var parentElement = $(input).parent( ".inputWrapper" );
                $(parentElement).find('.error-custom-message').remove();
        }
    });
    var otherInputs = Array.from($('.popup__parent #tfa_624 input.required'));
    otherInputs.forEach(input => {
        if($(input).val() === ''){
            $(input).addClass('error-form');
            var message = `<p class="error-custom-message">This field is required</p>`;
            var parentElement = $(input).parent( ".inputWrapper" );
            (parentElement).find('.error-custom-message').remove();
            $(parentElement).append(message);
        }else{
            $(input).removeClass('error-form');
            var parentElement = $(input).parent( ".inputWrapper" );
                $(parentElement).find('.error-custom-message').remove();
        }
    });


    var dateInput1 = '';
    var dateInput2 = '';
    var emailAddress1 = $('.popup__parent #tfa_187 #tfa_4');
    var phone1 = $('.popup__parent #tfa_187 #tfa_503');
    var zipcode = $('.popup__parent  #tfa_495');
    function isValidDate(date)
    {
        var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(date);
        if (matches == null) return false;
        var d = matches[2];
        var m = matches[1] - 1;
        var y = matches[3];
        var composedDate = new Date(y, m, d);
        return composedDate.getDate() == d &&
                composedDate.getMonth() == m &&
                composedDate.getFullYear() == y;
    }  
    function checkEmail(emailAddress) {
        var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
        var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
        var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
        var sQuotedPair = '\\x5c[\\x00-\\x7f]';
        var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
        var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
        var sDomain_ref = sAtom;
        var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
        var sWord = '(' + sAtom + '|' + sQuotedString + ')';
        var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
        var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
        var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
        var sValidEmail = '^' + sAddrSpec + '$'; // as whole string

        var reValidEmail = new RegExp(sValidEmail);

        return reValidEmail.test(emailAddress);
    }
    function checkPhone(elementValue){
    var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return phoneNumberPattern.test(elementValue);
    }
    function validateZipCode(elementValue){
        var zipCodePattern = /^\d{5}(-\d{4})?(?!-)$/;
        return zipCodePattern.test(elementValue);
    }

        var validEmail = false;
        var validPhone = false;
        var validZip = false;
        // Validate date fields
        if(isValidDate($(dateInput1).val())){ $(dateInput1).removeClass('error-form'); }else{ $(dateInput1).addClass('error-form'); }
        // Validate email fields
        if(checkEmail($(emailAddress1).val())){ 
            $(emailAddress1).removeClass('error-form'); 
            var parentElement = $(emailAddress1).parent( ".inputWrapper" );
            (parentElement).find('.error-custom-message').remove();
            validEmail = true;
        } else{ 
            $(emailAddress1).addClass('error-form'); 
            var message = `<p class="error-custom-message">Please enter a valid email</p>`;
            var parentElement = $(emailAddress1).parent( ".inputWrapper" );
            (parentElement).find('.error-custom-message').remove();
            $(parentElement).append(message);
        }
        // Validate Zip Code fields
        if(validateZipCode($(zipcode).val())){ 
            $(zipcode).removeClass('error-form')
            var parentElement = $(zipcode).parent( ".inputWrapper" );
            (parentElement).find('.error-custom-message').remove();
            validZip = true;
        } else{ 
            $(zipcode).addClass('error-form'); 
            var message = `<p class="error-custom-message">Please enter a 5 number Zip code </p>`;
            var parentElement = $(zipcode).parent( ".inputWrapper" );
            (parentElement).find('.error-custom-message').remove();
            $(parentElement).append(message);
        }

        if(validEmail && validZip){
            if($('.popup__parent #4713903').length){
                $('.popup__parent #4713903').submit().hide();
            }
            if($('.popup__parent #4728867').length){
                $('.popup__parent #4728867').submit().hide();
            }
            
            $('.thanks-message').show();
            $('.event-pop-thanks').removeClass('col-md-6').addClass('col-md-12');
            $('.event-pop-description').css('display','none');
            $('form').css('display', 'none');
            $('form').submit();
        }else{
        }
    
})
// ======  This click event controls the validation for the form popups ====== //



// ============================================================================//
// ============================================================================//
// ============================= Page Load Events =============================//
// ============================================================================//
// ============================================================================//

// ====== ON PAGE LOAD This click event controls and update the select fields once clicked ====== //
$(document).ready(function() {
    $('select').change(function() {
        $('#search-events').click();
        $('select').niceSelect('update');
    });
});
// ====== END OF ON PAGE LOAD This click event controls and update the select fields once clicked ====== //

// ====== ON PAGE LOAD Date picker input function ====== //
$(function() {
    if($(window).width() > 500) {
        var singleCalendar = false;
    }else{
        var singleCalendar = true;
    }
    $('input[name="daterange"]').daterangepicker({
    opens: 'center',
    minYear: 2019,
    linkedCalendars: true,
    autoUpdateInput: false,
    locale: {
        "cancelLabel": "Cancel",
        "format": "MM/DD/YYYY",
    }
    }, function(start, end, label) {
    var start = new Date(start);
    var end = new Date(end);
    var range = Array(Math.floor((end - start) / 86400000) + 1).fill().map((_, idx) => (new Date(start.getTime() + idx * 86400000)))

    var finalRange = new Array();
    for (let index = 0; index < range.length; index++) {
        var element = range[index];
        day = element.getDate();
        year = element.getFullYear();
        
        function tranformMonth(date){
            month = date.getMonth();
            month =  month +1;
            return (month);
        };

        month = tranformMonth(element);
        if(month < 10){
            month = '0'+month;
        }
        if(day < 10){
            day = '0'+day;
        }

        var newDate = `${month}-${day}-${year}`;
        finalRange.push(newDate);
    }


    localStorage.setItem('finalInputsRange', JSON.stringify(finalRange));
    $('#search-events').click();

    });
});
// ====== END OF ON PAGE LOAD Date picker input function ====== //




// ====== This click event controls the validation for the form popups - Form validation for Family Engagement ====== //
$(document).on('click touch', '.popup__parent  #4741631 #submit_button', function(event){
    event.preventDefault();
    var formInputs1 = Array.from($('.popup__parent #4741631 #tfa_821 input.active').not('.cellphone').not('#tfa_825'));
    var formInputs2 = Array.from($('.popup__parent #4741631 #tfa_684 input.active').not('.cellphone').not('#tfa_825'));
    var formInputs3 = Array.from($('.popup__parent #4741631 #tfa_729 input.active').not('.cellphone').not('#tfa_825'));
    var formInputs4 = Array.from($('.popup__parent #4741631 #tfa_757 input.active').not('.cellphone').not('#tfa_825'));
    var formInputs5 = Array.from($('.popup__parent #4741631 #tfa_785 input.active').not('.cellphone').not('#tfa_825'));
    var formInputs = formInputs1.concat(formInputs2).concat(formInputs3).concat(formInputs4).concat(formInputs5);

    formInputs.forEach(input => {
        if($(input).val() === ''){
            $(input).addClass('error-form');
            var message = `<p class="error-custom-message">This field is required</p>`;
            var parentElement = $(input).parent( ".inputWrapper" );
            (parentElement).find('.error-custom-message').remove();
            $(parentElement).append(message);
        }else{
            $(input).removeClass('error-form');
            var parentElement = $(input).parent( ".inputWrapper" );
                $(parentElement).find('.error-custom-message').remove();
        }
    });

    var dateInput1 = $('.popup__parent #4741631 #tfa_689')
    var dateInput2 = $('.popup__parent #4741631 #tfa_734')
    var dateInput3 = $('.popup__parent #4741631 #tfa_762')
    var dateInput4 = $('.popup__parent #4741631 #tfa_790')
    var dateInput5 = $('.popup__parent #4741631 #tfa_827')
    var emailAddress1 = $('.popup__parent #4741631 #tfa_825');
    var emailAddress2 = $('.popup__parent #4741631 #tfa_687');
    var phone1 = $('.popup__parent #4741631 #tfa_826');
    var phone2 = $('.popup__parent #4741631 #tfa_688');
    var zipcode = $('.popup__parent #4741631 #tfa_2177');
    var zipcode2 = $('.popup__parent #4741631 #tfa_495');
    function isValidDate(date)
    {
        var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(date);
        if (matches == null) return false;
        var d = matches[2];
        var m = matches[1] - 1;
        var y = matches[3];
        var composedDate = new Date(y, m, d);
        return composedDate.getDate() == d &&
                composedDate.getMonth() == m &&
                composedDate.getFullYear() == y;
    }  
    function checkEmail(emailAddress) {
        var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
        var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
        var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
        var sQuotedPair = '\\x5c[\\x00-\\x7f]';
        var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
        var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
        var sDomain_ref = sAtom;
        var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
        var sWord = '(' + sAtom + '|' + sQuotedString + ')';
        var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
        var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
        var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
        var sValidEmail = '^' + sAddrSpec + '$'; // as whole string

        var reValidEmail = new RegExp(sValidEmail);

        return reValidEmail.test(emailAddress);
    }
    function checkPhone(elementValue){
    var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return phoneNumberPattern.test(elementValue);
    }
    function validateZipCode(elementValue){
        var zipCodePattern = /^\d{5}(-\d{4})?(?!-)$/;
        return zipCodePattern.test(elementValue);
    }

        var validDate1 = false;
        var validDate2 = false;
        var validDate3 = false;
        var validDate4 = false;
        var validDate5 = false;
        var validEmail = false;
        var validEmail2 = false;
        var validPhone = false;
        var validPhone2 = false;
        var validZip = false;
        var validZip2 = false;
        // Validate date fields
        if($(dateInput1).hasClass('active')){
            if(isValidDate($(dateInput1).val())){ 
                $(dateInput1).removeClass('error-form'); 
                var parentElement = $(dateInput1).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validDate1 = true;
            }else{ 
                $(dateInput1).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a valid date, like 12/02/2020</p>`;
                var parentElement = $(dateInput1).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validDate1 = true;
        }

        if($(dateInput2).hasClass('active')){
            if(isValidDate($(dateInput2).val())){ 
                $(dateInput2).removeClass('error-form'); 
                var parentElement = $(dateInput2).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validDate2 = true;
            }else{ 
                $(dateInput2).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a valid date, like 12/02/2020</p>`;
                var parentElement = $(dateInput2).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validDate2 = true;
        }

        if($(dateInput3).hasClass('active')){
            if(isValidDate($(dateInput3).val())){ 
                $(dateInput3).removeClass('error-form'); 
                var parentElement = $(dateInput3).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validDate3 = true;
            }else{ 
                $(dateInput3).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a valid date, like 12/02/2020</p>`;
                var parentElement = $(dateInput3).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validDate3 = true;
        }

        if($(dateInput4).hasClass('active')){
            if(isValidDate($(dateInput4).val())){ 
                $(dateInput4).removeClass('error-form'); 
                var parentElement = $(dateInput4).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validDate4 = true;
            }else{ 
                $(dateInput4).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a valid date, like 12/02/2020</p>`;
                var parentElement = $(dateInput4).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validDate4 = true;
        }

        if($(dateInput5).hasClass('active')){
            if(isValidDate($(dateInput5).val())){ 
                $(dateInput5).removeClass('error-form'); 
                var parentElement = $(dateInput5).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validDate5 = true;
            }else{ 
                $(dateInput5).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a valid date, like 12/02/2020</p>`;
                var parentElement = $(dateInput5).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validDate5 = true;
        }

        if($(emailAddress1).hasClass('active')){
            // Validate email fields
            if(checkEmail($(emailAddress1).val())){ 
                $(emailAddress1).removeClass('error-form'); 
                var parentElement = $(emailAddress1).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validEmail = true;
            } else{ 
                $(emailAddress1).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a valid email</p>`;
                var parentElement = $(emailAddress1).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validEmail = true;
        }

        if($(emailAddress2).hasClass('active')){
            // Validate email fields
            if(checkEmail($(emailAddress2).val())){ 
                $(emailAddress2).removeClass('error-form'); 
                var parentElement = $(emailAddress2).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validEmail2 = true;
            } else{ 
                $(emailAddress2).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a valid email</p>`;
                var parentElement = $(emailAddress2).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validEmail2 = true;
        }

        if($(zipcode).hasClass('active')){
            // Validate Zip Code fields
            if(validateZipCode($(zipcode).val())){ 
                $(zipcode).removeClass('error-form')
                var parentElement = $(zipcode).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validZip = true;
            } else{ 
                $(zipcode).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a 5 number Zip code </p>`;
                var parentElement = $(zipcode).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validZip = true;
        }

        if($(zipcode2).hasClass('active')){
            if(validateZipCode($(zipcode2).val())){ 
                $(zipcode2).removeClass('error-form')
                var parentElement = $(zipcode2).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validZip2 = true;
            } else{ 
                $(zipcode2).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a 5 number Zip code </p>`;
                var parentElement = $(zipcode2).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validZip2 = true;
        }


        if(validDate1 && validDate2 && validDate3 && validDate4 && validDate5 && validEmail && validEmail2 &&  validZip){
            $('.popup__parent #4741631').hide();
            $('.thanks-message').show();
            $('.event-pop-thanks').removeClass('col-md-6').addClass('col-md-12');
            $('.event-pop-description').css('display','none');
            $('form').css('display', 'none');
            $('form').submit();
        }else{
        }
    
})
// ====== END OF This click event controls the validation for the form popups - Form validation for Family Engagement ====== //

// ====== this click event control the form validation ====== //
$(document).on('click touch', '.popup__parent  #4770353 #submit_button', function(event){
    event.preventDefault();
    var formInputs1 = Array.from($('.popup__parent #4770353 #tfa_821 input.active').not('.cellphone').not('#tfa_825'));
    var formInputs2 = Array.from($('.popup__parent #4770353 #tfa_684 input.active').not('.cellphone').not('#tfa_825'));
    var formInputs3 = Array.from($('.popup__parent #4770353 #tfa_729 input.active').not('.cellphone').not('#tfa_825'));
    var formInputs4 = Array.from($('.popup__parent #4770353 #tfa_757 input.active').not('.cellphone').not('#tfa_825'));
    var formInputs5 = Array.from($('.popup__parent #4770353 #tfa_785 input.active').not('.cellphone').not('#tfa_825'));
    var formInputs = formInputs1.concat(formInputs2).concat(formInputs3).concat(formInputs4).concat(formInputs5);
    formInputs.forEach(input => {
        if($(input).val() === ''){
            $(input).addClass('error-form');
            var message = `<p class="error-custom-message">This field is required</p>`;
            var parentElement = $(input).parent( ".inputWrapper" );
            (parentElement).find('.error-custom-message').remove();
            $(parentElement).append(message);
        }else{
            $(input).removeClass('error-form');
            var parentElement = $(input).parent( ".inputWrapper" );
                $(parentElement).find('.error-custom-message').remove();
        }
    });

    var dateInput1 = $('.popup__parent #4770353 #tfa_827')
    var dateInput2 = $('.popup__parent #4770353 #tfa_689')
    var dateInput3 = $('.popup__parent #4770353 #tfa_734')
    var dateInput4 = $('.popup__parent #4770353 #tfa_762')
    var dateInput5 = $('.popup__parent #4770353 #tfa_790')
    var emailAddress1 = $('.popup__parent #4770353 #tfa_825');
    var emailAddress2 = $('.popup__parent #4770353 #tfa_687');
    var phone1 = $('.popup__parent #4770353 #tfa_826');
    var phone2 = $('.popup__parent #4770353 #tfa_688');
    var zipcode = $('.popup__parent #4770353 #tfa_2177');
    var zipcode2 = $('.popup__parent #4770353 #tfa_495');
    function isValidDate(date)
    {
        var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(date);
        if (matches == null) return false;
        var d = matches[2];
        var m = matches[1] - 1;
        var y = matches[3];
        var composedDate = new Date(y, m, d);
        return composedDate.getDate() == d &&
                composedDate.getMonth() == m &&
                composedDate.getFullYear() == y;
    }  
    function checkEmail(emailAddress) {
        var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
        var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
        var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
        var sQuotedPair = '\\x5c[\\x00-\\x7f]';
        var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
        var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
        var sDomain_ref = sAtom;
        var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
        var sWord = '(' + sAtom + '|' + sQuotedString + ')';
        var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
        var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
        var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
        var sValidEmail = '^' + sAddrSpec + '$'; // as whole string

        var reValidEmail = new RegExp(sValidEmail);

        return reValidEmail.test(emailAddress);
    }
    function checkPhone(elementValue){
    var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return phoneNumberPattern.test(elementValue);
    }
    function validateZipCode(elementValue){
        var zipCodePattern = /^\d{5}(-\d{4})?(?!-)$/;
        return zipCodePattern.test(elementValue);
    }

        var validDate1 = false;
        var validDate2 = false;
        var validDate3 = false;
        var validDate4 = false;
        var validDate5 = false;
        var validEmail = false;
        var validEmail2 = false;
        var validPhone = false;
        var validPhone2 = false;
        var validZip = false;
        var validZip2 = false;
        // Validate date fields
        if($(dateInput1).hasClass('active')){
            if(isValidDate($(dateInput1).val())){ 
                $(dateInput1).removeClass('error-form'); 
                var parentElement = $(dateInput1).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validDate1 = true;
            }else{ 
                $(dateInput1).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a valid date, like 12/02/2020</p>`;
                var parentElement = $(dateInput1).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validDate1 = true;
        }

        if($(dateInput2).hasClass('active')){
            if(isValidDate($(dateInput2).val())){ 
                $(dateInput2).removeClass('error-form'); 
                var parentElement = $(dateInput2).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validDate2 = true;
            }else{ 
                $(dateInput2).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a valid date, like 12/02/2020</p>`;
                var parentElement = $(dateInput2).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validDate2 = true;
        }

        if($(dateInput3).hasClass('active')){
            if(isValidDate($(dateInput3).val())){ 
                $(dateInput3).removeClass('error-form'); 
                var parentElement = $(dateInput3).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validDate3 = true;
            }else{ 
                $(dateInput3).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a valid date, like 12/02/2020</p>`;
                var parentElement = $(dateInput3).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validDate3 = true;
        }

        if($(dateInput4).hasClass('active')){
            if(isValidDate($(dateInput4).val())){ 
                $(dateInput4).removeClass('error-form'); 
                var parentElement = $(dateInput4).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validDate4 = true;
            }else{ 
                $(dateInput4).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a valid date, like 12/02/2020</p>`;
                var parentElement = $(dateInput4).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validDate4 = true;
        }

        if($(dateInput5).hasClass('active')){
            if(isValidDate($(dateInput5).val())){ 
                $(dateInput5).removeClass('error-form'); 
                var parentElement = $(dateInput5).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validDate5 = true;
            }else{ 
                $(dateInput5).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a valid date, like 12/02/2020</p>`;
                var parentElement = $(dateInput5).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validDate5 = true;
        }

        if($(emailAddress1).hasClass('active')){
            // Validate email fields
            if(checkEmail($(emailAddress1).val())){ 
                $(emailAddress1).removeClass('error-form'); 
                var parentElement = $(emailAddress1).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validEmail = true;
            } else{ 
                $(emailAddress1).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a valid email</p>`;
                var parentElement = $(emailAddress1).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validEmail = true;
        }

        if($(emailAddress2).hasClass('active')){
            // Validate email fields
            if(checkEmail($(emailAddress2).val())){ 
                $(emailAddress2).removeClass('error-form'); 
                var parentElement = $(emailAddress2).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validEmail2 = true;
            } else{ 
                $(emailAddress2).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a valid email</p>`;
                var parentElement = $(emailAddress2).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validEmail2 = true;
        }

        if($(zipcode).hasClass('active')){
            // Validate Zip Code fields
            if(validateZipCode($(zipcode).val())){ 
                $(zipcode).removeClass('error-form')
                var parentElement = $(zipcode).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validZip = true;
            } else{ 
                $(zipcode).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a 5 number Zip code </p>`;
                var parentElement = $(zipcode).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validZip = true;
        }

        if($(zipcode2).hasClass('active')){
            if(validateZipCode($(zipcode2).val())){ 
                $(zipcode2).removeClass('error-form')
                var parentElement = $(zipcode2).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                validZip2 = true;
            } else{ 
                $(zipcode2).addClass('error-form'); 
                var message = `<p class="error-custom-message">Please enter a 5 number Zip code </p>`;
                var parentElement = $(zipcode2).parent( ".inputWrapper" );
                (parentElement).find('.error-custom-message').remove();
                $(parentElement).append(message);
            }
        }else{
            validZip2 = true;
        }


        if(validDate1 && validDate2 && validDate3 && validDate4 && validDate5 && validEmail && validEmail2 &&  validZip){
            $('.popup__parent #4770353').hide();
            $('.thanks-message').show();
            $('.event-pop-thanks').removeClass('col-md-6').addClass('col-md-12');
            $('.event-pop-description').css('display','none');
            $('form').css('display', 'none');
            $('form').submit();
        }else{
        }
    
})
// ====== END OF this click event control the form validation ====== //

// ====== This click events controls the checkbox selector for the Appropriate filters  ====== //
$('.select_simulator').click(function(){
    if($('.select_options').hasClass('open')){
        $('.select_options').removeClass('open');
    }else{
        $('.select_options').addClass('open');
    }
});
$('.select_options').click(function(event){
    event.stopPropagation();
});
// ====== END OF This click events controls the checkbox selector for the Appropriate filters  ====== //



// ============================================================================//
// ============================================================================//
// ============================= Page Change Events ===========================//
// ============================================================================//
// ============================================================================//

// ====== Toggle and hide elements for the Select options select field ====== //
$( ".issues__wrapper .select_options " ).change(function(){
    $('#search-events').click();

    var checkboxes = Array.from($( ".issues__wrapper .select_options input" ));
    checkboxes.forEach(element => {
    if( $(element)[0].checked === true){
    }else{
        var elementClass = $(element).val();
        if(elementClass){
            $(`#searchTags .${elementClass}`).remove();
        }
    }
    });
    var remainTags = $('#searchTags li');
    if(remainTags.length === 0 ){
        $('.searchTagsWrapper').hide();
    }
    $('.select_options').removeClass('open');
});
// ====== END OF Toggle and hide elements for the Select options select field ====== //

// ====== Toggle and hide elements for the family engagement form ====== //
$(document).on("change", "#4741631 #tfa_873" , function() {
    if(this.checked) {
        $('#4741631 #tfa_855').removeClass('hidden-group') // other adults group
        $('#4741631 #tfa_855 input').addClass('active'); 
    }else{
        $('#4741631 #tfa_855').addClass('hidden-group')
        $('#4741631 #tfa_855 input').removeClass('active'); 
    }
});
$(document).on("change", "#4741631 #tfa_2234" , function() {
    if(this.checked) {
        $('#4741631 #tfa_820').removeClass('hidden-group') // other adults group
        $('#4741631 #tfa_820 input').addClass('active'); 
    }else{
        $('#4741631 #tfa_820').addClass('hidden-group')
        $('#4741631 #tfa_820 input').removeClass('active'); 
    }
});
$(document).on("change", "#4741631 #tfa_2238" , function() {
    if(this.checked) {
        $('#4741631 #tfa_728').removeClass('hidden-group') // First child  group
        $('#4741631 #tfa_728 input').addClass('active'); 
    }else{
        $('#4741631 #tfa_728').addClass('hidden-group')
        $('#4741631 #tfa_728 input').removeClass('active'); 
    }
});
$(document).on("change", "#4741631 #tfa_736" , function() {
    if(this.checked) {
        $('#4741631 #tfa_858').removeClass('hidden-group') // Second child  group
        $('#4741631 #tfa_858 input').addClass('active'); 
    }else{
        $('#4741631 #tfa_858').addClass('hidden-group')
        $('#4741631 #tfa_858 input').removeClass('active'); 
    }
});
$(document).on("change", "#4741631 #tfa_768" , function() {
    if(this.checked) {
        $('#4741631 #tfa_862').removeClass('hidden-group') // Third child  group
        $('#4741631 #tfa_862 input').addClass('active'); 
    }else{
        $('#4741631 #tfa_862').addClass('hidden-group')
        $('#4741631 #tfa_862 input').removeClass('active'); 
    }
});
// Familiar NYC
$(document).on("change", "#4770353 #tfa_873" , function() {
    if(this.checked) {
        $('#4770353 #tfa_684').removeClass('hidden-group') // other adults group
        $('#4770353 #tfa_684 input').addClass('active'); 
    }else{
        $('#4770353 #tfa_684').addClass('hidden-group')
        $('#4770353 #tfa_684 input').removeClass('active'); 
    }
});
$(document).on("change", "#4770353 #tfa_2234" , function() {
    if(this.checked) {
        $('#4770353 #tfa_820').removeClass('hidden-group') // other adults group
        $('#4770353 #tfa_820 input').addClass('active'); 
    }else{
        $('#4770353 #tfa_820').addClass('hidden-group')
        $('#4770353 #tfa_820 input').removeClass('active'); 
    }
});
$(document).on("change", "#4770353 #tfa_2238" , function() {
    if(this.checked) {
        $('#4770353 #tfa_728').removeClass('hidden-group') // First child  group
        $('#4770353 #tfa_728 input').addClass('active'); 
    }else{
        $('#4770353 #tfa_728').addClass('hidden-group')
        $('#4770353 #tfa_728 input').removeClass('active'); 
    }
});
$(document).on("change", "#4770353 #tfa_736" , function() {
    if(this.checked) {
        $('#4770353 #tfa_757').removeClass('hidden-group') // Second child  group
        $('#4770353 #tfa_757 input').addClass('active'); 
        $('#4770353 #tfa_767-D').removeClass('hidden-group') // Second child  group
        $('#4770353 #tfa_767-D input').addClass('active'); 
    }else{
        $('#4770353 #tfa_757').addClass('hidden-group')
        $('#4770353 #tfa_757 input').removeClass('active'); 
        $('#4770353 #tfa_767-D').addClass('hidden-group')
        $('#4770353 #tfa_767-D input').removeClass('active'); 
    }
});
$(document).on("change", "#4770353 #tfa_768" , function() {
    if(this.checked) {
        $('#4770353 #tfa_862').removeClass('hidden-group') // Third child  group
        $('#4770353 #tfa_862 input').addClass('active'); 
    }else{
        $('#4770353 #tfa_862').addClass('hidden-group')
        $('#4770353 #tfa_862 input').removeClass('active'); 
    }
});
// NYC new valdiation
// script for the new NYC families form
$(document).on("change", ".nycfamform #tfa_2233" , function() {
    // 1 adult selected
    if( $(this).val() === 'tfa_2234'){
        $('.nycfamform #tfa_855').removeClass('active').addClass('hidden-group');
        $('.nycfamform #tfa_684').removeClass('active').addClass('hidden-group');
            //inputs
            $('.nycfamform #tfa_684 input').removeClass('active');
    }
    // 2 adult selected
    else if($(this).val() === 'tfa_4526'){
        $('.nycfamform #tfa_855').removeClass('hidden-group').addClass('active');
        $('.nycfamform #tfa_684').removeClass('hidden-group').addClass('active');
            //inputs
            $('.nycfamform #tfa_684 input').addClass('active');
    }
})
$(document).on("change", ".nycfamform #tfa_2237" , function() {
    // 1 child selected
    if( $(this).val() === 'tfa_2238'){
        // hide second child
        $('.nycfamform #tfa_858').removeClass('active').addClass('hidden-group');
        $('.nycfamform #tfa_757').removeClass('active').addClass('hidden-group');
            //inputs
            $('.nycfamform #tfa_757 input').removeClass('active');
        // hide third child
        $('.nycfamform #tfa_862').removeClass('active').addClass('hidden-group');
        $('.nycfamform #tfa_785').removeClass('active').addClass('hidden-group');    
            //inputs
            $('.nycfamform #tfa_785 input').removeClass('active');
    }
    // 2 children selected
    else if($(this).val() === 'tfa_4527'){
        // show second child
        $('.nycfamform #tfa_858').removeClass('hidden-group').addClass('active');
        $('.nycfamform #tfa_757').removeClass('hidden-group').addClass('active');
            //inputs
            $('.nycfamform #tfa_757 input').addClass('active');

        // hide third child
        $('.nycfamform #tfa_862').removeClass('active').addClass('hidden-group');
        $('.nycfamform #tfa_785').removeClass('active').addClass('hidden-group');  
            //inputs
            $('.nycfamform #tfa_785 input').removeClass('active');
    }
    // 3 children selected
    else if($(this).val() === 'tfa_4528'){
        // show second child
        $('.nycfamform #tfa_858').removeClass('hidden-group').addClass('active');
        $('.nycfamform #tfa_757').removeClass('hidden-group').addClass('active');
            //inputs
            $('.nycfamform #tfa_757 input').addClass('active');
        // show third child
        $('.nycfamform #tfa_862').removeClass('hidden-group').addClass('active');
        $('.nycfamform #tfa_785').removeClass('hidden-group').addClass('active');
            //inputs
            $('.nycfamform #tfa_785 input').addClass('active');
    }
})
// Family all new valdiation
// script for the new  families form
$(document).on("change", ".allfamilyevents #tfa_2233" , function() {
    // 1 adult selected
    if( $(this).val() === 'tfa_2234'){
        $('.allfamilyevents #tfa_855').removeClass('active').addClass('hidden-group');
        $('.allfamilyevents #tfa_684').removeClass('active').addClass('hidden-group');
            //inputs
            $('.allfamilyevents #tfa_684 input').removeClass('active');
    }
    // 2 adult selected
    else if($(this).val() === 'tfa_4520'){
        $('.allfamilyevents #tfa_855').removeClass('hidden-group').addClass('active');
        $('.allfamilyevents #tfa_684').removeClass('hidden-group').addClass('active');
            //inputs
            $('.allfamilyevents #tfa_684 input').addClass('active');
    }
})
$(document).on("change", ".allfamilyevents #tfa_2237" , function() {
    // 1 child selected
    if( $(this).val() === 'tfa_2238'){
        // hide second child
        $('.allfamilyevents #tfa_858').removeClass('active').addClass('hidden-group');
        $('.allfamilyevents #tfa_757').removeClass('active').addClass('hidden-group');
            //inputs
            $('.allfamilyevents #tfa_757 input').removeClass('active');
        // hide third child
        $('.allfamilyevents #tfa_862').removeClass('active').addClass('hidden-group');
        $('.allfamilyevents #tfa_785').removeClass('active').addClass('hidden-group');    
            //inputs
            $('.allfamilyevents #tfa_785 input').removeClass('active');
    }
    // 2 children selected
    else if($(this).val() === 'tfa_4521'){
        // show second child
        $('.allfamilyevents #tfa_858').removeClass('hidden-group').addClass('active');
        $('.allfamilyevents #tfa_757').removeClass('hidden-group').addClass('active');
            //inputs
            $('.allfamilyevents #tfa_757 input').addClass('active');

        // hide third child
        $('.allfamilyevents #tfa_862').removeClass('active').addClass('hidden-group');
        $('.allfamilyevents #tfa_785').removeClass('active').addClass('hidden-group');  
            //inputs
            $('.allfamilyevents #tfa_785 input').removeClass('active');
    }
    // 3 children selected
    else if($(this).val() === 'tfa_4522'){
        // show second child
        $('.allfamilyevents #tfa_858').removeClass('hidden-group').addClass('active');
        $('.allfamilyevents #tfa_757').removeClass('hidden-group').addClass('active');
            //inputs
            $('.allfamilyevents #tfa_757 input').addClass('active');
        // show third child
        $('.allfamilyevents #tfa_862').removeClass('hidden-group').addClass('active');
        $('.allfamilyevents #tfa_785').removeClass('hidden-group').addClass('active');
            //inputs
            $('.allfamilyevents #tfa_785 input').addClass('active');
    }
})
// ====== END OF Toggle and hide elements for the family engagement form ====== //