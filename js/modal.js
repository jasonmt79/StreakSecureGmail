(function(StreakSecureGmail){
	var $ = StreakSecureGmail.$,
		_ = StreakSecureGmail._,
		Gmail = StreakSecureGmail.Gmail;

	var CONSTANTS = {
		MODAL_TEMPLATE: _.template([
			'<div class="Kj-JD" tabindex="-1">',
				'<div class="Kj-JD-K7 Kj-JD-K7-GIHV4" id="">',
				'<span class="Kj-JD-K7-K0  title"><%= title %></span>',
				'<span class="Kj-JD-K7-Jq close" ></span>',
				'</div>',
				'<div class="Kj-JD-Jz inner">',
				'</div>',
				'<div class="Kj-JD-Jl buttonArea">',
				'</div>',
			'</div>'
		].join(""))
	};

	var overlay = $(document.createElement('div'));
	overlay[0].innerHTML = '<div class="streak__overlayInner"></div><div class="streak__overlayModal"></div>';
	overlay.addClass('streak__overlay');
	overlay.hide();

	var overlayModal = overlay.find('.streak__overlayModal');

	var self, Modal;
	self = Modal = {

		show: function(title){
			var newModal = $(document.createElement('div'));
			newModal.addClass('streak__modal');
			newModal[0].innerHTML = CONSTANTS.MODAL_TEMPLATE({title: title});

			overlayModal[0].innerHTML = '';
			overlayModal.append(newModal[0]);
			overlay.show('block');

			newModal.find('.close').onClick(self.close);

			return newModal;
		},

		close: function(){
			overlay.hide();
		}

	};

	/* add modal css options */
	Gmail.ready(function(){
		var css = StreakSecureGmail.document.styleSheets[0];

		css.insertRule('.buttonArea {text-align: right;}', 0);
		css.insertRule('.buttonArea .bbButton:last-child {margin-right: 0px;}', 0);
		css.insertRule('.Kj-JD {max-height: 600px;}', 0);
		css.insertRule('.Kj-JD .inner {padding-bottom: 1px;}', 0);
		css.insertRule('.Kj-JD .inner input {width: 100%;}', 0);
		css.insertRule('.Kj-JD .xy {margin-top: 10px;}', 0);
		css.insertRule('.Kj-JD div.inputFieldWrapper {padding-right:4px;padding-left:1px;margin-right:2px}', 0);
		css.insertRule('.streak__overlayModal {width: 100%; height: 100%;}', 0);
		css.insertRule('.streak__modal {width: 100%; height:100%; display:-webkit-flex;}', 0);
		css.insertRule('.streak__modal .xy {font-weight: bold;}', 0);
		css.insertRule('.streak__modal .close {cursor: pointer;}', 0);
		css.insertRule('.streak__modal h3 { margin-top: 10px; margin-bottom:5px; }', 0);
		css.insertRule('.streak__overlay {position: fixed; top: 0px; bottom: 0px; left: 0px; right:0px; z-index: 100}', 0);
		css.insertRule('.streak__overlayInner {position: absolute; top:0px; bottom:0px; left: 0px; right:0px; background-color: white; opacity: 0.75;}', 0);
		css.insertRule('.streak__modal .Kj-JD {margin-left: auto; margin-right: auto; position: relative; -webkit-align-self: center;}', 0);
		css.insertRule('.streak__modal .streak__error {margin-top: 20px; color: red;}', 0);
		css.insertRule('.streak__modal .streak__extraHint {color: #666; font-size: 85%}', 0);

		Gmail.elements.body.append(overlay[0]);
	});


	StreakSecureGmail.Widgets.Modal = Modal;

})(StreakSecureGmail);
