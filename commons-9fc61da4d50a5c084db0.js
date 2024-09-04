/*! For license information please see commons-9fc61da4d50a5c084db0.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[223],{5753:function(e,t,r){"use strict";r.d(t,{Am:function(){return a}});var o=r(6540),n=r(4848);const i=["as","disabled"];function a({tagName:e,disabled:t,href:r,target:o,rel:n,role:i,onClick:a,tabIndex:s=0,type:l}){e||(e=null!=r||null!=o||null!=n?"a":"button");const c={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},c];const u=o=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(r))&&o.preventDefault(),t?o.stopPropagation():null==a||a(o)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:t?void 0:s,href:r,target:"a"===e?o:void 0,"aria-disabled":t||void 0,rel:"a"===e?n:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const s=o.forwardRef(((e,t)=>{let{as:r,disabled:o}=e,s=function(e,t){if(null==e)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;r[o]=e[o]}return r}(e,i);const[l,{tagName:c}]=a(Object.assign({tagName:r,disabled:o},s));return(0,n.jsx)(c,Object.assign({},s,l,{ref:t}))}));s.displayName="Button",t.Ay=s},2944:function(e,t,r){"use strict";r.d(t,{A:function(){return v}});var o=r(6540),n=r(8629),i=r.n(n),a=r(5867),s=r.n(a),l=r(7581),c=r(6942),u=r.n(c),d=r(5753),m=r(6519),f=r(4848);const p=o.forwardRef((({as:e,bsPrefix:t,variant:r="primary",size:o,active:n=!1,disabled:i=!1,className:a,...s},l)=>{const c=(0,m.oU)(t,"btn"),[p,{tagName:h}]=(0,d.Am)({tagName:e,disabled:i,...s}),g=h;return(0,f.jsx)(g,{...p,...s,ref:l,disabled:i,className:u()(a,c,n&&"active",r&&`${c}-${r}`,o&&`${c}-${o}`,s.href&&i&&"disabled")})}));p.displayName="Button";var h=p,g=r(641);var y=(0,l.default)(h).withConfig({displayName:"style__ButtonWrapper",componentId:"sc-1fgxler-0"})(["display:flex;align-items:center;gap:11px;color:",";font-weight:",';font-family:"Space Grotesk",sans-serif;padding:11px 15px 11px 15px;border-radius:8px;font-size:16px;line-height:24px;font-weight:700;transition:all 0.3s ease-in-out;position:relative;white-space:nowrap;border:none;'," .button-icon{box-sizing:border-box;transition:all 0.3s ease-in-out;svg{transition:transform 0.3s ease-in-out;transform:rotate(0deg);}}&.btn-primary{border:1px solid ",";color:",";background-color:",";display:flex;align-items:center;gap:16px;.button-icon{width:24px;height:24px;padding:0;margin-top:-4px;svg{}}&:hover{color:",";background-color:",";border:1px solid ",";&::after{width:0;}.button-icon{path{&.svg-fill-primary{fill:",";}&.svg-fill-secondary{fill:",";}&.svg-stroke{stroke:",";}}svg{transform:rotate(90deg);}}}}&.btn-secondary{border:1px solid ",";color:",";background-color:",";display:flex;align-items:center;gap:16px;.button-icon{width:24px;height:24px;padding:0;margin-top:-4px;svg{path{&.svg-fill-primary{fill:",";}&.svg-fill-secondary{fill:",";}&.svg-stroke{stroke:",";}}}}&:hover{color:",";background-color:",";border:1px solid ",";.button-icon{path{&.svg-fill-primary{fill:",";}&.svg-fill-secondary{fill:",";}&.svg-stroke{stroke:",";}}svg{transform:rotate(90deg);}}}}&.btn-outline-primary{color:",";background-color:transparent;border:1px solid ",";display:flex;align-items:center;gap:16px;.button-icon{width:26px;height:26px;padding:0;margin-top:-2px;path{&.svg-fill-primary{fill:",";}&.svg-fill-secondary{fill:",";}&.svg-stroke{stroke:",";}}svg{transform:rotate(0deg);}}&:hover{border:1px solid ",";color:",";background-color:",";&::after{width:0;}.button-icon{path{&.svg-fill-primary{fill:",";}&.svg-fill-secondary{fill:",";}&.svg-stroke{stroke:",";}}svg{transform:rotate(90deg);}}}}&.btn-outline-secondary{color:",";background-color:transparent;border:1px solid ",";display:flex;align-items:center;gap:13px;.button-icon{width:26px;height:26px;padding:0;margin-top:-2px;path{&.svg-fill-primary{fill:",";}&.svg-fill-secondary{fill:",";}&.svg-stroke{stroke:#d2d9dc;}}svg{transform:rotate(0deg);}}&:hover{border:1px solid ",";color:",";background-color:",";.button-icon{path{&.svg-fill-primary{fill:",";}&.svg-fill-secondary{fill:",";}&.svg-stroke{stroke:",";}}svg{transform:rotate(90deg);}}}}&.btn-text{text-align:center;justify-content:center !important;&:hover{border:0px;}&.text-white{color:",";}}&.secondary-btn{color:",";.button-icon{border-color:",";svg{fill:",";}}&:hover{.button-icon{border-color:",";}}}"],(e=>{let{theme:t}=e;return t.colors.secondaryColor}),(e=>{let{theme:t}=e;return t.fontWeight.bold}),g.$.xs`
    font-size: ${e=>{let{theme:t}=e;return t.fonts.baseFontSizeXs}};
    padding: 6px 12px;
  `,(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.textMedium}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.textMedium}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.whiteColor}),(e=>{let{theme:t}=e;return t.colors.dangerColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}),(e=>{let{theme:t}=e;return t.colors.primaryColor}));var v=e=>{const{text:t,className:r,type:n,onClick:a,arrow:l,arrowSimple:c,variant:u}=e;return o.createElement(y,{variant:u||"text",className:r,onClick:a},t,l&&o.createElement("div",{className:"button-icon"},o.createElement("div",null,o.createElement(i(),{className:n}))),c&&o.createElement("div",{className:"button-icon"},o.createElement("div",null,o.createElement(s(),{className:n}))))}},4546:function(e,t,r){"use strict";r.d(t,{$6:function(){return h},Hl:function(){return w},J4:function(){return v},KK:function(){return b},NE:function(){return g},So:function(){return i},T9:function(){return m},XE:function(){return s},ZC:function(){return d},cU:function(){return u},f4:function(){return n},i3:function(){return c},qo:function(){return y},uy:function(){return l},v$:function(){return k},vG:function(){return f},xL:function(){return a},xO:function(){return p}});var o=r(6540);const n=[{name:"Home",to:"#home",isSection:!0},{name:"About",to:"/about/",isSection:!1},{name:"How we work",to:"#work-section",isSection:!0},{name:"Pricing",to:"#pricing-section",isSection:!0},{name:"FAQs",to:"#faq-section",isSection:!0},{name:"Support",to:"#support-section",isSection:!1}],i=[{feedback:'"Seller Terminal recovered over $80k for my business. Their dedicated recovery agent handled everything seamlessly, and I didn\'t have to worry about a thing. I highly recommend their service."',clientName:"Bob Steele",designation:"8-Figure Amazon Seller",amount:"$80k+",cases:"4k",clientImg:"/st-avatar.svg"},{feedback:"\"I was skeptical at first, but Seller Terminal's free audit revealed so many missed reimbursements. They recovered funds I didn't even know were owed to me. Their team is thorough and professional.\" Emily",clientName:"Steve",designation:"Brand Owner",amount:"$70k+",cases:"3k",clientImg:"/st-avatar.svg"},{feedback:"“I can't believe how much money I was losing before using Seller Terminal. Their system caught every error and discrepancy. My personal recovery agent was incredibly helpful and responsive.\"",clientName:"David Klein",designation:"E-commerce Business Owner",amount:"$90k+",cases:"5k",clientImg:"/st-avatar.svg"}],a=[{label:"Missing Reimbursement",desc:"When Amazon claims they reimbursed a claim amount but haven't, we spot this and secure it."},{label:"Customer Replacements",desc:"If Amazon sends a replacement before the original is returned, we ensure you aren’t charged if the original isn’t returned within 45 days."},{label:"Missing Order Credits",desc:"If a customer received a refund but didn’t get credited, we’ll file a claim if it’s been over 45 days."},{label:"Customer Refund Overages",desc:"When customers receive a larger refund than they paid, and you get charged, we handle this."}],s=[{label:"Destroyed Items",desc:"We track items destroyed by Amazon without permission to get you reimbursements."},{label:"Warehouse Losses",desc:"We handle reimbursement claims for items lost or damaged in an Amazon warehouse."},{label:"Inventory Adjustments",desc:"We find discrepancies in claimed inventory adjustments and secure refunds."},{label:"Returned Inventory Errors",desc:"If the wrong item is returned to your inventory, we’ll get the cost back for you."}],l=[{label:"Transaction Reconciliation",desc:"We reconcile all transactions per item to ensure accuracy in orders, returns, and reimbursements."},{label:"Customer Refund Overages",desc:"When customers receive a larger refund than paid, we manage these discrepancies."},{label:"Chargebacks",desc:"We address non-refunded chargebacks and ensure you aren't wrongfully charged."},{label:"Inaccurate Order Refunds",desc:"We follow up on partial reimbursements to secure the full appropriate amount."},{label:"Inaccurate Reimbursements",desc:"We track the exact reimbursement amounts to ensure you receive the full claim."}],c=[{label:"Shipment Stock Counts",desc:"We recover costs for stock deducted after a shipment is closed."},{label:"Damaged Shipments",desc:"We reclaim costs for inbound shipments damaged or not received."},{label:"Inventory Adjustments",desc:"We secure reimbursements for returns damaged by a carrier or Amazon."}],u=[{label:"Restocking Fees",desc:"We find orders returned over 30 days and reclaim the 20% restocking fee per policy."},{label:"Weight and Dimension Fees",desc:"We get refunds for overcharged weight or dimensional fees."},{label:"Commission Fees",desc:"We identify and reclaim overcharged commission fees on products."},{label:"Missing Removal Orders",desc:"We reclaim costs for removal orders not received, helping reduce your monthly fees."}],d=[{title:"Free \n Audit",desc:"Get a free, no-obligation audit with a recovery estimate delivered in 8-10 hours.",img:"/free-audit.svg"},{title:"Traceable \n Funds",desc:"Enjoy 100% traceable funds transfer, ensuring transparency & accountability in every transaction.",img:"/traceable-funds.svg"},{title:"Precision in \n Recovery",desc:"Trace funds that others may miss, ensuring you receive every eligible reimbursement.",img:"/precision-recovery.svg"},{title:"Personal \n Recovery Agent",desc:"When customers receive a larger refund than they paid, and you get charged, we handle this.",img:"/personal-recovery.svg"}],m=[{label:"Sign Up",desc:"Get started with a zero-cost, no-obligation audit and receive a report on available refunds.",img:"/process-sign-up.svg"},{label:"Connect Your Accounts",desc:"We access your accounts to import and audit your FBA transactions.",img:"/connect-account.svg"},{label:"Assign a Recovery Agent",desc:"Our dedicated recovery agent handles your case.",img:"/recovery-agent.svg"},{label:"Audit Potential Claims",desc:"We review products, inventory, orders, and returns eligible for reimbursement claims.",img:"/potential-claims.svg"},{label:"File Your Cases On Your Behalf",desc:"You receive a detailed report on money returns against each case.",img:"/file-cases.svg"},{label:"Get Your Money",desc:"Reimbursements are deposited directly into your seller accounts. Easy peasy!",img:"/get-money.svg"}],f=[{id:1,title:"How far can you go back to collect reimbursements for me?",content:"Our Amazon reimbursement specialists can submit up to 18 months old Amazon FBA reimbursement cases offering in-depth refund audits and reports.  Besides, the time may depend on your FBA reimbursement case."},{id:2,title:"What types of cases do you cover for FBA sellers?",content:o.createElement("div",null,"Following are various FBA seller refund claims we cover:",o.createElement("ul",null,o.createElement("li",null,"Lost inventory "),o.createElement("li",null,"Unfulfillable inventory refunds"),o.createElement("li",null,"FBA overcharged fees"),o.createElement("li",null,"FBA inventory reconciliation"),o.createElement("li",null,"Amazon FBA refunds")))},{id:3,title:"Will Amazon automatically refund the lost package?",content:"No, Amazon does not automatically refund the lost package as it cannot track the package. Instead, it considers the order “late” and/or “undelivered”. Your lost package is however eligible for reimbursement via the “request a refund” option. The amount is then auto-refunded as Amazon takes full responsibility for order fulfillment issues. "},{id:4,title:"How long does Amazon reimbursement take?",content:"The Amazon refund process may take up to 5 to 7 business days on your original payment method. If you are an Amazon third-party seller who does not see “Refunded” in the refund status and the time limit has been exceeded,  you can simply contact our Amazon refunds manager for further assistance."},{id:5,title:"Why do you take a percentage of the reimbursed revenue?",content:"Our FBA auditors perform the daunting task of recovering lost revenue and making sure you receive every penny back in your bank account, therefore, deserve to be rewarded in the form of compensation."}],p=[{id:1,title:"What is the Seller Terminal affiliate program?",content:"The Seller Terminal affiliate program allows you to earn commissions by referring Amazon sellers to our reimbursement services. When a seller signs up and uses our services through your referral link, you earn a percentage of the revenue."},{id:2,title:"How do I join the affiliate program?",content:"Simply fill out the registration form on our affiliate page. Once approved, you’ll receive access to your affiliate dashboard and marketing materials."},{id:3,title:"How much can I earn?",content:"Our commission structure is highly competitive, offering a substantial percentage of the revenue from each referral. Your earnings potential is unlimited, depending on the number of successful referrals."},{id:4,title:"When and how do I get paid?",content:"We offer monthly payouts via various payment methods. Your earnings will be tracked in real-time, and you’ll receive your commissions on time, every time."},{id:5,title:"What marketing materials are provided? ",content:"We provide a range of marketing materials, including banners, email templates, and social media content, to help you effectively promote Seller Terminal."}],h=[{id:1,name:"About",to:"/about"},{id:2,name:"How we work",to:"#work-section"},{id:3,name:"Pricing",to:"#pricing-section"},{id:4,name:"FAQ’s",to:"#faq-section"},{id:5,name:"Support",to:"#support-section"},{id:6,name:"Terms & Conditions",to:"#terms"},{id:7,name:"FBA Cases",to:"#fba-cases"},{id:8,name:"Features",to:"#features"},{id:8,name:"Affiliate Program",to:"/affiliate"}],g=[{heading:"Refunds",img:"/refund-img.svg",data:a},{heading:"Inventory ",img:"/inventory-img.svg",data:s},{heading:"Payments",img:"/payments-img.svg",data:l},{heading:"Shipments",img:"/shipments-img.svg",data:c},{heading:"Fees and Overcharges",img:"/overcharges-img.svg",data:u}],y=[{title:"Comprehensive FBA Reimbursements",desc:"We meticulously audit your Amazon transactions to uncover lost revenue and discrepancies. Our advanced software and dedicated recovery team ensure you receive the maximum reimbursements.",img:"/fba-reimbursement.svg"},{title:"Transparent and Traceable",desc:"Our easy-to-use dashboard provides real-time updates on every claim to help you stay informed about the status of your reimbursements. We ensure complete transparency and traceability in all transactions.",img:"/traceable.svg"},{title:"Amazon Compliance",desc:"We strictly adhere to Amazon’s Terms of Service, ensuring all our processes are compliant and risk-free. Our team stays updated with the latest Amazon policies to protect your account and reputation.",img:"/amazon-compliance.svg"},{title:"No Upfront Fees",desc:"Our success is tied to yours. We operate on a contingency basis, meaning you don’t pay unless you receive your refunds. This performance-based model ensures our goals are aligned with yours.",img:"/upfront-fees.svg"}],v=[{label:"Free, No-Obligation Audit",desc:"Get started with a complimentary audit of your Amazon account. We’ll provide you with a recovery estimate within 8-10 hours.",img:"/no-obligation-audit.png"},{label:"Full-Suite Reimbursement Services",desc:"From fees and orders to inventory and returns, we handle all FBA reimbursement claims. Our comprehensive service covers every aspect of your Amazon business.",img:"/reimbursement-services.png"},{label:"Dedicated Support",desc:"Each seller is assigned a personal recovery agent who provides tailored assistance and support. Our team is always ready to answer your questions and help you navigate the reimbursement process.",img:"/dedicated-support.png"}],b=[{title:"Proven Track \n Record",desc:"Join over 1,000 sellers, brands, and aggregators who have successfully recovered their money with our help. We have a 99% success rate and have recovered over $1M in funds.",img:"/track-record.svg"},{title:"Expertise and \n Innovation",desc:"Our team combines expertise with cutting-edge technology to deliver the best results. We continuously refine our processes to stay ahead of the curve.",img:"/expertise.svg"},{title:"Seller-Centric \n Approach",desc:"Your success is our priority. We are committed to providing exceptional service and support, helping you reclaim your money and reinvest it into growing your business.",img:"/seller-centric.svg"}],w=[{title:"High-Demand, High-Reward",desc:"Amazon sellers lose significant revenue monthly due to errors. Be their hero by offering our in-demand reimbursement service and earn generous commissions!",img:"/high-reward.svg"},{title:"Top-Tier Commissions and Earning Potential",desc:"Our easy-to-use dashboard provides real-time updates on every claim to help you stay informed about the status of your reimbursements. We ensure complete transparency and traceability in all transactions.",img:"/top-tier.svg"},{title:"Proven Track Record and Trusted Community",desc:"Seller Terminal has a history of recovering millions for sellers. Join our thriving affiliate community of over 250+ partners and share in our success.",img:"/proven-track.svg"},{title:"Unlock Hidden Profits, Fuel Your Growth",desc:"Recovered funds are just the beginning. We help you identify additional cash flow opportunities within your business. Reinvest these newfound profits to expand your Amazon empire with confidence.",img:"/hidden-profit.svg"}],k=[{title:"Easy Sign-Up \n Process",desc:"Joining our affiliate program is as easy as 1-2-3. Simply sign up, get approved, and start promoting. No complicated hoops to jump through!",img:"/easy-signup.svg"},{title:"Ready-to-Use Marketing Materials",desc:"We provide a treasure trove of marketing materials to help you effectively promote Seller Terminal. From eye-catching banners to compelling email templates, we’ve got you covered.",img:"/marketing-material.svg"},{title:"Real-Time \n Tracking",desc:"Our real-time tracking system lets you keep an eye on your referrals and earnings. Monitor your performance and tweak your strategies for maximum results",img:"/time-tracking.svg"},{title:"Dedicated Affiliate \n Support",desc:"Got questions? Need advice? Our friendly affiliate support team is always here to help. Whether you need assistance with marketing strategies or your account, we’re just a click away.",img:"/dedicated-support.svg"}]},5858:function(e,t,r){var o="Expected a function",n=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,m="object"==typeof self&&self&&self.Object===Object&&self,f=d||m||Function("return this")(),p=Object.prototype.toString,h=Math.max,g=Math.min,y=function(){return f.Date.now()};function v(e,t,r){var n,i,a,s,l,c,u=0,d=!1,m=!1,f=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var r=n,o=i;return n=i=void 0,u=t,s=e.apply(o,r)}function v(e){var r=e-c;return void 0===c||r>=t||r<0||m&&e-u>=a}function k(){var e=y();if(v(e))return x(e);l=setTimeout(k,function(e){var r=t-(e-c);return m?g(r,a-(e-u)):r}(e))}function x(e){return l=void 0,f&&n?p(e):(n=i=void 0,s)}function C(){var e=y(),r=v(e);if(n=arguments,i=this,c=e,r){if(void 0===l)return function(e){return u=e,l=setTimeout(k,t),d?p(e):s}(c);if(m)return l=setTimeout(k,t),p(c)}return void 0===l&&(l=setTimeout(k,t)),s}return t=w(t)||0,b(r)&&(d=!!r.leading,a=(m="maxWait"in r)?h(w(r.maxWait)||0,t):a,f="trailing"in r?!!r.trailing:f),C.cancel=function(){void 0!==l&&clearTimeout(l),u=0,n=c=i=l=void 0},C.flush=function(){return void 0===l?s:x(y())},C}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==i}(e))return n;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=l.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):s.test(e)?n:+e}e.exports=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),v(e,t,{leading:n,maxWait:t,trailing:i})}},8396:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();function n(e){return e&&e.__esModule?e:{default:e}}var i=r(6540),a=n(i),s=n(r(5858)),l=n(r(5556)),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,r){for(var o=!0;o;){var n=e,i=t,a=r;o=!1,null===n&&(n=Function.prototype);var s=Object.getOwnPropertyDescriptor(n,i);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(a)}var c=Object.getPrototypeOf(n);if(null===c)return;e=c,t=i,r=a,o=!0,s=c=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"==typeof window,this.listener=(0,s.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),this.listener.cancel(),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var r=this;this.delayedAnimationTimeout=setTimeout((function(){r.animating=!0,r.setState({classes:"animated "+e,style:{animationDuration:r.props.duration+"s"}}),r.callbackTimeout=setTimeout(t,1e3*r.props.duration)}),this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,(function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var r=t.getVisibility();e&&e(r)}))}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,(function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var r=t.getVisibility();r.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(r)}))}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return a.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}(i.Component);t.default=c,c.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},c.propTypes={animateIn:l.default.string,animateOut:l.default.string,offset:l.default.number,duration:l.default.number,delay:l.default.number,initiallyVisible:l.default.bool,animateOnce:l.default.bool,style:l.default.object,scrollableParentSelector:l.default.string,className:l.default.string,animatePreScroll:l.default.bool},e.exports=t.default},1105:function(e,t,r){"use strict";var o=r(6942),n=r.n(o),i=r(6540),a=r(6519),s=r(4848);const l=i.forwardRef(((e,t)=>{const[{className:r,...o},{as:i="div",bsPrefix:l,spans:c}]=function({as:e,bsPrefix:t,className:r,...o}){t=(0,a.oU)(t,"col");const i=(0,a.gy)(),s=(0,a.Jm)(),l=[],c=[];return i.forEach((e=>{const r=o[e];let n,i,a;delete o[e],"object"==typeof r&&null!=r?({span:n,offset:i,order:a}=r):n=r;const u=e!==s?`-${e}`:"";n&&l.push(!0===n?`${t}${u}`:`${t}${u}-${n}`),null!=a&&c.push(`order${u}-${a}`),null!=i&&c.push(`offset${u}-${i}`)})),[{...o,className:n()(r,...l,...c)},{as:e,bsPrefix:t,spans:l}]}(e);return(0,s.jsx)(i,{...o,ref:t,className:n()(r,!c.length&&l)})}));l.displayName="Col",t.A=l},3048:function(e,t,r){"use strict";var o=r(6942),n=r.n(o),i=r(6540),a=r(6519),s=r(4848);const l=i.forwardRef((({bsPrefix:e,fluid:t=!1,as:r="div",className:o,...i},l)=>{const c=(0,a.oU)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,s.jsx)(r,{ref:l,...i,className:n()(o,t?`${c}${u}`:c)})}));l.displayName="Container",t.A=l},4479:function(e,t,r){"use strict";var o=r(6942),n=r.n(o),i=r(6540),a=r(6519),s=r(4848);const l=i.forwardRef((({bsPrefix:e,className:t,as:r="div",...o},i)=>{const l=(0,a.oU)(e,"row"),c=(0,a.gy)(),u=(0,a.Jm)(),d=`${l}-cols`,m=[];return c.forEach((e=>{const t=o[e];let r;delete o[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const n=e!==u?`-${e}`:"";null!=r&&m.push(`${d}${n}-${r}`)})),(0,s.jsx)(r,{ref:i,...o,className:n()(t,l,...m)})}));l.displayName="Row",t.A=l},6519:function(e,t,r){"use strict";r.d(t,{Jm:function(){return u},Wz:function(){return d},gy:function(){return c},oU:function(){return l}});var o=r(6540);r(4848);const n=["xxl","xl","lg","md","sm","xs"],i=o.createContext({prefixes:{},breakpoints:n,minBreakpoint:"xs"}),{Consumer:a,Provider:s}=i;function l(e,t){const{prefixes:r}=(0,o.useContext)(i);return e||r[t]||t}function c(){const{breakpoints:e}=(0,o.useContext)(i);return e}function u(){const{minBreakpoint:e}=(0,o.useContext)(i);return e}function d(){const{dir:e}=(0,o.useContext)(i);return"rtl"===e}},8629:function(e,t,r){var o=r(6540);function n(e){return o.createElement("svg",e,[o.createElement("path",{className:"svg-stroke",d:"M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z",stroke:"#D2D9DC",strokeLinejoin:"round",key:0}),o.createElement("path",{className:"svg-fill-primary",d:"M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z",fill:"white",key:1}),o.createElement("path",{className:"svg-fill-secondary",d:"M9 12.5001H15.0999L12.3002 9.70022L13.0003 9L17 13L13.0003 17L12.3002 16.2998L15.0999 13.4999H9V12.5001Z",fill:"#5F737C",key:2})])}n.defaultProps={width:"26",height:"26",viewBox:"0 0 26 26",fill:"none"},e.exports=n,n.default=n},5867:function(e,t,r){var o=r(6540);function n(e){return o.createElement("svg",e,o.createElement("path",{d:"M0 5.25018H9.14989L4.95029 1.05033L6.00046 0L12 6L6.00046 12L4.95029 10.9497L9.14989 6.74982H0V5.25018Z",fill:"white"}))}n.defaultProps={width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},e.exports=n,n.default=n},6942:function(e,t){var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,i(r)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)o.call(e,r)&&e[r]&&(t=a(t,r));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=commons-9fc61da4d50a5c084db0.js.map