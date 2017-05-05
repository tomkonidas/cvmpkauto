var arrLang = {
    "en" : {
        "companyTitle" : "PK Auto Inspection Center",
        "scrollText" : "Learn More",
        "companyCategory" : "SAAQ Agent",
        "companyDescription" : "PK Auto is a company that is responsible for performing mechanical inspections on road vehicles for the SAAQ.",
        "periodicInspection" : "Periodic Mechanical Inspection every 6 or 12 months",
        "periodicInspectionDetails" : "Vehicles less than 4,500 kg: buses and minibuses, taxis, emergency vehicles, driving school vehicles, Uber vehicles.",
        "photometricInspection" : "Tinted Window Photometric Inspection",
        "photometricInspectionDetails" : "The front side windows of the vehicle must pass light 70% or more when measured with a photometer.",
        "ponctualInspection" : "Ponctual Mechanical Inspection",
        "ponctualInspectionDetails" : "Manufactured, modified or handcrafted vehicles, vehicles that have not been plated after 12 months, vehicles that come from outside Québec are the subject of an application for registration in Québec.",
        "conformitySticker" : "Issue of certificates and vignettes of conformity",
        "conformityStickerDetails" : "Once the mechanical inspection has been completed, we will affix a compliance sticker if the vehicle complies with safety standards. Otherwise, you must have it repaired.",
        "contact" : "Contact Us",
        "arrival" : "Upon arrival, park your vehicle in our private parking lot located next to our garage and present yourself at our reception with the appropriate documents and keys of the vehicle.",
        "moreInfo" : "To make an appointment or for any general information regarding our services please call us."
    },
    "fr" : {
        "companyTitle" : "Centre De Vérification Mécanique PK Auto",
        "scrollText" : "Savoir Plus",
        "companyCategory" : "Mandataire de la SAAQ",
        "companyDescription" : "PK Auto est une entreprise qui a la responsabilité d'effectuer des vérifications mécaniques sur les véhicules routiers pour la SAAQ.",
        "periodicInspection" : "Vérification Mécanique Périodique tous les 6 ou 12 mois",
        "periodicInspectionDetails" : "Véhicules de moins de 4,500 kg: autobus et minibus, taxis, véhicules d'urgence, véhicules des écoles de conduite, véhicules d'Uber.",
        "photometricInspection" : "Vérification Photométrique Vitres teintées des véhicules",
        "photometricInspectionDetails" : "Les vitres latérales avant du véhicule doivent laisser passer la lumière à 70% ou plus lorsqu'on la mesure à l'aide d'un photomètre.",
        "ponctualInspection" : "Vérification Mécanique Ponctuelle",
        "ponctualInspectionDetails" : "Les véhicules transformés ou modifiés, fabrication artisanale, à déremiser après 12 mois, les véhicules qui proviennent de l'extérieur du Québec et qui font l'objet d'une demande d'immatriculation au Québec.",
        "conformitySticker" : "Délivrance des certificats et vignettes de conformité",
        "conformityStickerDetails" : "Une fois la vérification mécanique terminée, nous allons apposer une vignette de conformité si le véhicule est conforme aux normes de sécurité. Sinon, vous devez le faire réparer.",
        "contact" : "Contactez nous",
        "arrival" : "À votre arrivée, stationnez votre véhicule dans notre terrain privé situé juste à côté de notre garage et présentez-vous à notre réception avec les documents appropriés et les clés du véhicule.",
        "moreInfo" : "Pour faire un rendez-vous ou pour toute informations générales concernant nos services s'il vous plaît appelez-nous."
    }
}

var langTag = $('html').attr('lang');

$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');
        var langTag = $('html').attr('lang');

        langTag = $('html').attr('lang',lang);

        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});