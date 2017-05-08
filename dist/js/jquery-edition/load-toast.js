/**
 * Created by liuqixing on 06/05/2017.
 */
function CLoadToast( _oParent )
{
	var m_oThis = this;
	var m_sBoardSelector	= "#load-toast";
	var m_sTextSelector	= m_sBoardSelector + " .js-text-title";

	//	propertys
	this.oParent		= _oParent;


	this.showLoadToast = function( sTitle, nDuration )
	{
		return _showLoadToast( sTitle, nDuration );
	};
	this.hideLoadToast = function()
	{
		return _hideLoadToast();
	};
	this.isTopToastShown = function()
	{
		return _isTopToastShown();
	};


	////////////////////////////////////////////////////////////
	//	Private

	function __construct()
	{
	}

	function _isValidDuration( nDuration )
	{
		return ( 'number' == typeof nDuration && nDuration > 0 );
	}

	function _isTopToastShown()
	{
		return ! $( m_sBoardSelector ).hasClass( "hide" );
	}

	function _showLoadToast( sTitle, nDuration )
	{
		$( m_sTextSelector ).text( sTitle );
		if ( _isValidDuration( nDuration ) )
		{
			$( m_sBoardSelector )
				.show()
				.delay( nDuration )
				.queue( function()
				{
					_hideLoadToast();
					$( this ).dequeue();
				});
		}
		else
		{
			$( m_sBoardSelector ).show();
		}
	}

	function _hideLoadToast()
	{
		$( m_sBoardSelector ).hide();
	}


	__construct();
}