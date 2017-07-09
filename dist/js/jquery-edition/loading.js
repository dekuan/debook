/**
 *	Created by liuqixing on June 5, 2017.
 *	Updated by liuqixing on July 9, 2017.
 */
function CLoading( _oParent )
{
	var m_oThis		= this;
	var m_sClassName	= "js-global-loading";

	//	properties
	this.oParent		= _oParent;
	this.cLoading		= null;


	//	...
	this.show = function( sTitle, sExtraClassName )
	{
		var sClassName;

		//	...
		if ( 0 == $lslen( sTitle ) )
		{
			sTitle = "正在装载";
		}

		//	...
		sClassName = m_sClassName;
		if ( $lslen( sExtraClassName ) )
		{
			sClassName += ( " " + sExtraClassName );
		}

		//	...
		m_oThis.cLoading = weui.loading
		(
			sTitle, { className: sClassName }
		);

		//	...
		console.log( 'CLoadToast was shown' );
	};

	//	...
	this.hide = function()
	{
		m_oThis.cLoading.hide( function()
		{
			console.log( 'CLoadToast was hidden.' );
		});
	};

	//	...
	this.isShown = function()
	{
		return $( "." + m_sClassName ).is( ":visible" );
	};


	////////////////////////////////////////////////////////////
	//	Private

	function __construct()
	{
	}


	__construct();
}