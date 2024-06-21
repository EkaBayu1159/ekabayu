var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_KecamatanGenteng_1 = new ol.format.GeoJSON();
var features_KecamatanGenteng_1 = format_KecamatanGenteng_1.readFeatures(json_KecamatanGenteng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanGenteng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanGenteng_1.addFeatures(features_KecamatanGenteng_1);
var lyr_KecamatanGenteng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanGenteng_1, 
                style: style_KecamatanGenteng_1,
                popuplayertitle: "Kecamatan Genteng",
                interactive: true,
    title: 'Kecamatan Genteng<br />\
    <img src="styles/legend/KecamatanGenteng_1_0.png" /> Embong Kaliasin<br />\
    <img src="styles/legend/KecamatanGenteng_1_1.png" /> Genteng<br />\
    <img src="styles/legend/KecamatanGenteng_1_2.png" /> Kapasari<br />\
    <img src="styles/legend/KecamatanGenteng_1_3.png" /> Ketabang<br />\
    <img src="styles/legend/KecamatanGenteng_1_4.png" /> Peneleh<br />\
    <img src="styles/legend/KecamatanGenteng_1_5.png" /> <br />'
        });
var format_d_JaringanJalan_Fixed_2 = new ol.format.GeoJSON();
var features_d_JaringanJalan_Fixed_2 = format_d_JaringanJalan_Fixed_2.readFeatures(json_d_JaringanJalan_Fixed_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_JaringanJalan_Fixed_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_JaringanJalan_Fixed_2.addFeatures(features_d_JaringanJalan_Fixed_2);
var lyr_d_JaringanJalan_Fixed_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d_JaringanJalan_Fixed_2, 
                style: style_d_JaringanJalan_Fixed_2,
                popuplayertitle: "d_JaringanJalan_Fixed",
                interactive: true,
                title: '<img src="styles/legend/d_JaringanJalan_Fixed_2.png" /> d_JaringanJalan_Fixed'
            });
var format_Bufferedketrjangkauanhalte_3 = new ol.format.GeoJSON();
var features_Bufferedketrjangkauanhalte_3 = format_Bufferedketrjangkauanhalte_3.readFeatures(json_Bufferedketrjangkauanhalte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bufferedketrjangkauanhalte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bufferedketrjangkauanhalte_3.addFeatures(features_Bufferedketrjangkauanhalte_3);
var lyr_Bufferedketrjangkauanhalte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bufferedketrjangkauanhalte_3, 
                style: style_Bufferedketrjangkauanhalte_3,
                popuplayertitle: "Buffered ketrjangkauan halte",
                interactive: true,
    title: 'Buffered ketrjangkauan halte<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_0.png" /> Halte Balai Kota<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_1.png" /> Halte Bambu Runcing<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_2.png" /> Halte Basra<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_3.png" /> Halte Cak Durasim A<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_4.png" /> Halte Cak Durasim B<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_5.png" /> Halte Embong Kemiri<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_6.png" /> Halte Embong Malang<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_7.png" /> Halte Embong Malang 2<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_8.png" /> Halte Embong Wungu<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_9.png" /> Halte Genteng Kali A<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_10.png" /> Halte Genteng Kali B<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_11.png" /> Halte Gondosuli<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_12.png" /> Halte Grand City<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_13.png" /> Halte Gubernur Suryo<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_14.png" /> Halte Jaksa Agung Suprapto<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_15.png" /> Halte Jimerto<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_16.png" /> Halte Kaliasin<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_17.png" /> Halte Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_18.png" /> Halte Kayoon 1A<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_19.png" /> Halte Kayoon 1B<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_20.png" /> Halte Kayoon 2A<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_21.png" /> Halte Kayoon 2B<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_22.png" /> Halte Ketabang Ngemplak<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_23.png" /> Halte MMPA SIOLA A<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_24.png" /> Halte Monkasel<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_25.png" /> Halte Monumen Sudirman<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_26.png" /> Halte MPP SIOLA B<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_27.png" /> Halte Ngemplak<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_28.png" /> Halte Pangsud<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_29.png" /> Halte Pemuda<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_30.png" /> Halte PMI<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_31.png" /> Halte Simpang Dukuh<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_32.png" /> Halte Sindoro<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_33.png" /> Halte SIOLA<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_34.png" /> Halte Slamet<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_35.png" /> Halte SMPN 3<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_36.png" /> Halte Sono Kembang<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_37.png" /> Halte Sono Kembang 2<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_38.png" /> Halte Taman Apsari<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_39.png" /> Halte Taman Prestasi<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_40.png" /> Halte Tunjungan<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_41.png" /> Halte Urip Sumoharjo 1<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_42.png" /> Halte Wuni<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_43.png" /> Halte Yos Sudarso<br />\
    <img src="styles/legend/Bufferedketrjangkauanhalte_3_44.png" /> <br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_KecamatanGenteng_1.setVisible(true);lyr_d_JaringanJalan_Fixed_2.setVisible(true);lyr_Bufferedketrjangkauanhalte_3.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_KecamatanGenteng_1,lyr_d_JaringanJalan_Fixed_2,lyr_Bufferedketrjangkauanhalte_3];
lyr_KecamatanGenteng_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'jangkauan': 'jangkauan', 'presentase': 'presentase', 'FOTO': 'GAMBAR', });
lyr_d_JaringanJalan_Fixed_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_Bufferedketrjangkauanhalte_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Informasi Halte__Nama_Halte': 'Informasi Halte__Nama_Halte', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', });
lyr_KecamatanGenteng_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'jangkauan': 'TextEdit', 'presentase': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_d_JaringanJalan_Fixed_2.set('fieldImages', {'fid': '', 'osm_id': '', 'bridge': '', 'tunnel': '', 'width': '', 'highway': '', 'surface': '', 'railway': '', 'layer': '', 'oneway': '', 'name': '', 'smoothness': '', });
lyr_Bufferedketrjangkauanhalte_3.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Informasi Halte__Nama_Halte': 'TextEdit', 'Informasi Halte__RUTE': 'TextEdit', });
lyr_KecamatanGenteng_1.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'jangkauan': 'no label', 'presentase': 'no label', });
lyr_d_JaringanJalan_Fixed_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_Bufferedketrjangkauanhalte_3.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'inline label - always visible', 'Sumber': 'inline label - always visible', 'Informasi Halte__Nama_Halte': 'header label - always visible', 'Informasi Halte__RUTE': 'header label - always visible', });
lyr_Bufferedketrjangkauanhalte_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});