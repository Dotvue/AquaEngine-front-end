<script>
export default {
  name: "inventory-form",

  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      userId: 0, // Será configurado automáticamente
      productName: "",
      quantityPerUnit: "",
      unitPrice: 0,
      quantity: 0,
    };
  },

  methods: {
    _emitPopUpFormState() {
      this.$emit("pop-up-form-state", false);
    },

    closeDialog() {
      this._emitPopUpFormState();
    },

    resetFields() {
      this.productName = "";
      this.quantityPerUnit = "";
      this.unitPrice = 0;
      this.quantity = 0;
    },

    handleSubmit() {
      const newProduct = {
        userId: this.userId, // Se envía automáticamente
        name: this.productName,
        quantityPerUnit: this.quantityPerUnit,
        unitPrice: this.unitPrice,
        quantity: this.quantity,
      };

      this.$emit("submit-product", newProduct);

      this.resetFields();
      this.closeDialog();
    },
  },

  created() {
    // Obtener el UserId automáticamente desde el localStorage al crear el componente
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.id) {
      this.userId = storedUser.id;
    } else {
      console.error("No user ID found in localStorage.");
    }
  },
};
</script>

<template>
  <pv-dialog :visible="visible" modal @hide="closeDialog" class="min-w-[300px]">
    <template #header>
      <div class="-mb-5">
        <h1 class="title ml-4 mb-0">Register Product</h1>
      </div>
    </template>

    <div class="p-4">
      <form @submit.prevent="handleSubmit" class="flex flex-col space-y-4">
        <!-- Product Name -->
        <div>
          <label for="productName" class="block">Product Name</label>
          <input
              type="text"
              id="productName"
              v-model="productName"
              required
              class="w-full border rounded p-2"
          />
        </div>

        <!-- Quantity Per Unit -->
        <div>
          <label for="quantityPerUnit" class="block">Quantity Per Unit</label>
          <input
              type="text"
              id="quantityPerUnit"
              v-model="quantityPerUnit"
              required
              class="w-full border rounded p-2"
          />
        </div>

        <div class="flex space-x-4">
          <!-- Unit Price -->
          <div class="flex-1">
            <label for="unitPrice" class="block">Unit Price</label>
            <input
                type="number"
                id="unitPrice"
                v-model="unitPrice"
                required
                class="w-full border rounded p-2"
            />
          </div>
          <!-- Quantity -->
          <div class="flex-1">
            <label for="quantity" class="block">Quantity</label>
            <input
                type="number"
                id="quantity"
                v-model="quantity"
                required
                class="w-full border rounded p-2"
            />
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex justify-between">
          <pv-button
              label="Register Now"
              style="background-color: #8298E7; color: #000; border: none;"
              type="submit"
          />
          <pv-button label="Close" severity="danger" @click="closeDialog"/>
        </div>
      </form>
    </div>
  </pv-dialog>
</template>

<style scoped>
</style>
