<template>
    <div @click.self="$store.commit('closeAuth')" class="modal-auth" :style="{ display: isAuthModalOpen ? 'flex' : 'none' }">
        <div class="modal-dialog modal-dialog-auth">
            <button class="close-auth" @click="$store.commit('closeAuth')">&times;</button>
            <form id="logInForm" action="/" method="get">
                <fieldset class="modal-body">
                    <legend class="modal-title">Авторизация</legend>
                    <label class="label-auth">
                        <span>Логин</span>
                        <input id="login" type="text" />
                    </label>
                    <label class="label-auth">
                        <span>Пароль</span>
                        <input id="password" type="password" />
                    </label>
                </fieldset>
                <!-- /.modal-body -->
                <div class="modal-footer">
                    <div class="footer-buttons">
                        <button class="button button-primary button-login" type="submit">Войти</button>
                    </div>
                </div>
            </form>
            <!-- /.modal-footer -->
        </div>
        <!-- /.modal-dialog -->
    </div>
</template>

<script>
import { computed } from 'vue';
import { getStore } from '../store';

export default {
    setup() {
        const store = getStore();
        return {
            isAuthModalOpen: computed(() => store.state.isAuthModalOpen),
        };
    },
};
</script>
