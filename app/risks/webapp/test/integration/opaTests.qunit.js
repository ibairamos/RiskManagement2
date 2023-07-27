sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement2/risks/test/integration/FirstJourney',
		'riskmanagement2/risks/test/integration/pages/RisksList',
		'riskmanagement2/risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement2/risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);