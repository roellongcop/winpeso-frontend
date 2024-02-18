;( function($, w, d, h, b) {

	var app = {

        initTranslateDropdown: function(){
            let selectedLanguage = { code: 'en', name: 'English', flagUrl: 'assets/images/flags/260-united-kingdom.png' };

            function setLanguage(langCode, languageName, flagUrl) {
                selectedLanguage.code = langCode;
                selectedLanguage.name = languageName;
                selectedLanguage.flagUrl = flagUrl;

                const dropdownButton = $(".translate-dropbtn");
                dropdownButton.html(`<img src="${flagUrl}" alt="Language Flag"> ${languageName}`);
            }

            const dropdownButton = $(".translate-dropbtn");
            const dropdownContent = $(".translate-dropdown-content");

            dropdownButton.on("click", function() {
                dropdownContent.toggleClass("show");
            });

            $(document).on("click", function(event) {
                if (!$(event.target).is(".translate-dropbtn, .translate-dropdown-content span")) {
                    dropdownContent.removeClass("show");
                }
            });

            // Handle language selection when clicking on a span
            const languageSpans = $(".translate-dropdown-content span");
            languageSpans.on("click", function() {
                const selectedLanguageCode = $(this).data("code").trim();
                const selectedLanguageName = $(this).data("lang-name").trim();
                const selectedFlagUrl = $(this).find("img").attr("src");
                setLanguage(selectedLanguageCode, selectedLanguageName, selectedFlagUrl);

                dropdownContent.removeClass("show"); // Hide the dropdown after language selection
            });

            // Set the initial language for the button
            setLanguage(selectedLanguage.code, selectedLanguage.name, selectedLanguage.flagUrl);
        },
		init: function() {
			this.initTranslateDropdown();
		}

	}

    

	$(document).ready( function() {

        app.init();

	});


})(jQuery, window, document, 'html', 'body');