<template>
    <div class="footer-area-wrapper" :class="FooterStyle">
        <div class="footer-copyright-area border-top section-space--ptb_30">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-left">
                        <span class="copyright-text">
                            &copy; 2022 <b></b> Made with <i class="fa fa-heart text-danger"></i> by Giovanni Mora <a href="https://github.com/cgmorah" target="_blank"><b>@cgmorah</b></a>
                        </span>
                    </div>
                    <div class="col-md-6 text-center text-md-right">
                        <ul class="list ht-social-networks solid-rounded-icon">
                            <li class="item">
                                <a href="https://www.linkedin.com/in/cgmorah/" target="_blank" class="social-link"> <i class="fab fa-linkedin social-link-icon"></i> </a>
                            </li>
                            <li class="item">
                                <a href="https://www.behance.net/cgmorah" target="_blank" class="social-link"> <i class="fab fa-behance social-link-icon"></i> </a>
                            </li>
                            <li class="item">
                                <a href="https://twitter.com/cgmorah" target="_blank" class="social-link"> <i class="fab fa-twitter social-link-icon"></i> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterMain',
        props: ["FooterStyle"]
    }
</script>
