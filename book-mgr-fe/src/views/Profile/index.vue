   <template>
    <div>
        <a-card title="修改密码">
            <a-form :model="form" :label-col="{span:4}" :wrapper-col="{span:14}">
                <a-form-item label="原始密码">
                    <a-input v-model:value="resetPasswordForm.oldPassword"></a-input>
                </a-form-item>
                 <a-form-item label="新密码">
                    <a-input v-model:value="resetPasswordForm.newPassword"></a-input>
                </a-form-item>
                 <a-form-item label="确认新密码">
                    <a-input v-model:value="resetPasswordForm.confirmNewPassword"></a-input>
                    <div style="margin-top:24px;">
                        <a-button @click="resetPassword" type="primary">修改</a-button>
                    </div>
                    
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>

<script src="./index.js"></script>