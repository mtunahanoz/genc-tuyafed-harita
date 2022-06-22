anychart.onDocumentReady(function() {
    // create map
    var map = anychart.map();
  

  
  
    // create data set
    var dataSet = anychart.data.set(
        [{"id":"TR.AY","value":0, "il":"Aydın"},
              {"id":"TR.IZ","value":0, "il":"İzmir"},
              {"id":"TR.BK","value":0, "il":"Balıkesir"},
              {"id":"TR.CK","value":0, "il":"Çanakkale"},
              {"id":"TR.ED","value":0, "il":"Edirne"},
              {"id":"TR.KL","value":0, "il":"Kırklareli"},
              {"id":"TR.TG","value":0, "il":"Tekirdağ"},
              {"id":"TR.BC","value":0, "il":"Bilecik"},
              {"id":"TR.BU","value":0, "il":"Bursa"},
              {"id":"TR.IB","value":30, "manager": "Serhat Kurt", "img":"baskan.png", "il":"İstanbul"},
              {"id":"TR.KC","value":0, "il":"Kocaeli"},
              {"id":"TR.SK","value":0, "il":"Sakarya"},
              {"id":"TR.BL","value":0, "il":"Bolu"},
              {"id":"TR.ES","value":0, "il":"Eskişehir"},
              {"id":"TR.KS","value":0, "il":"Kastamonu"},
              {"id":"TR.AL","value":0, "il":"Antalya"},
              {"id":"TR.AF","value":0, "il":"Afyonkarahisar"},
              {"id":"TR.BD","value":0, "il":"Burdur"},
              {"id":"TR.DN","value":0, "il":"Denizli"},
              {"id":"TR.IP","value":0, "il":"Isparta"},
              {"id":"TR.KU","value":0, "il":"Kütahya"},
              {"id":"TR.MN","value":0, "il":"Manisa"},
              {"id":"TR.MG","value":0, "il":"Muğla"},
              {"id":"TR.AD","value":0, "il":"Adıyaman"},
              {"id":"TR.EG","value":0, "il":"Elazığ"},
              {"id":"TR.KM","value":0, "il":"Kahramanmaraş"},
              {"id":"TR.ML","value":0, "il":"Malatya"},
              {"id":"TR.IC","value":0, "il":"Mersin"},
              {"id":"TR.KH","value":0, "il":"Kırşehir"},
              {"id":"TR.KY","value":0, "il":"Kayseri"},
              {"id":"TR.NV","value":0, "il":"Nevşehir"},
              {"id":"TR.HT","value":0, "il":"Hatay"},
              {"id":"TR.AM","value":0, "il":"Amasya"},
              {"id":"TR.CM","value":0, "il":"Çorum"},
              {"id":"TR.GI","value":0, "il":"Giresun"},
              {"id":"TR.OR","value":0, "il":"Ordu"},
              {"id":"TR.SP","value":0, "il":"Sinop"},
              {"id":"TR.SV","value":0, "il":"Sivas"},
              {"id":"TR.SS","value":0, "il":"Samsun"},
              {"id":"TR.TT","value":0, "il":"Tokat"},
              {"id":"TR.AV","value":0, "il":"Artvin"},
              {"id":"TR.EM","value":0, "il":"Erzurum"},
              {"id":"TR.EN","value":0, "il":"Erzincan"},
              {"id":"TR.RI","value":0, "il":"Rize"},
              {"id":"TR.TB","value":0, "il":"Trabzon"},
              {"id":"TR.AG","value":0, "il":"Ağrı"},
              {"id":"TR.BG","value":0, "il":"Bingöl"},
              {"id":"TR.DY","value":0, "il":"Diyarbakır"},
              {"id":"TR.MS","value":0, "il":"Mersin"},
              {"id":"TR.BT","value":0, "il":"Bitlis"},
              {"id":"TR.AN","value":1, "manager": "Muhammed Tunahan Öz", "il":"Ankara", "manager_as":"Yok"},
              {"id":"TR.CI","value":0, "il":"Çankırı"},
              {"id":"TR.ZO","value":0, "il":"Zonguldak"},
              {"id":"TR.KO","value":0, "il":"Konya"},
              {"id":"TR.KR","value":0, "il":"Karaman"},
              {"id":"TR.US","value":0, "il":"Uşak"},
              {"id":"TR.GA","value":0, "il":"Gaziantep"},
              {"id":"TR.SU","value":0, "il":"Şanlıurfa"},
              {"id":"TR.AA","value":0, "il":"Adıyaman"},
              {"id":"TR.KK","value":0, "il":"Kırıkkale"},
              {"id":"TR.NG","value":0, "il":"Niğde"},
              {"id":"TR.AK","value":0, "il":"Aksaray"},
              {"id":"TR.YZ","value":0, "il":"Yozgat"},
              {"id":"TR.GU","value":0, "il":"Gümüşhane"},
              {"id":"TR.BB","value":0, "il":"Bayburt"},
              {"id":"TR.KA","value":0, "il":"Kars"},
              {"id":"TR.MR","value":0, "il":"Mardin"},
              {"id":"TR.BM","value":0, "il":"Batman"},
              {"id":"TR.SI","value":0, "il":"Saka"},
              {"id":"TR.SR","value":0, "il":"Siirt"},
              {"id":"TR.TC","value":0, "il":"Tunceli"},
              {"id":"TR.HK","value":0, "il":"Hakkari"},
              {"id":"TR.VA","value":0, "il":"Van"},
              {"id":"TR.AR","value":0, "il":"Ardahan"},
              {"id":"TR.IG","value":0, "il":"Iğdır"},
              {"id":"TR.KI","value":0, "il":"Kilis"},
              {"id":"TR.OS","value":0, "il":"Osmaniye"},
              {"id":"TR.YL","value":0, "il":"Yalova"},
              {"id":"TR.DU","value":0, "il":"Düzce"},
              {"id":"TR.KB","value":0, "il":"Karabük"},
              {"id":"TR.BR","value":0, "il":"Bartın"}]
    ); // Sunucuda çalıştıracağım zaman ayrı dosyaya alacağım
  
    
    // create choropleth series
    series = map.choropleth(dataSet);
      var tooltip = series.tooltip();
      
  
  
    tooltip.useHtml(true);
  
    tooltip.titleFormat("");
  
  
    tooltip.format( "<center><span style='text-align:center; font-size:25px;'>{%il}</span></center> \
    <p style='font-size:14px; text-decoration:bold;'><b>Başkan: {%manager}</b></p>\
    <p style='font-size:14px; text-decoration:bold;'><b>Başkan Yardımcısı: {%manager_as}</b></p>\
    <p style='font-size:14px;'>Üye Sayısı: {%value}</p>\
    <div id='tooltip-container'></div>");
    
    // set geoIdField to 'id', this field contains in geo data meta properties
    series.geoIdField('id');
  
    // set map color settings
  colorScale = anychart.scales.ordinalColor();
  colorScale.ranges([
      {from: 0, to: 0, color: "gray"},
      {from: 1, to: 50, color: "Tomato"},
      {from: 51, to: 200, color: "OrangeRed"},
      {from: 201, to: 1000, color: "Firebrick"},
    {from: 1001, to: 5000, color: "DarkRed"},
    {from: 5000, to: 50000, color: "Brown"}
  ]);
    series.colorScale(colorScale);
    
    series.hovered().fill('#addd8e');
  
    // set geo data, you can find this map in our geo maps collection
    // https://cdn.anychart.com/#maps-collection
    map.geoData(anychart.maps['turkey']);
  
    //set map container id (div)
    map.container('container');
  
    //initiate map drawing
    map.draw();
  });