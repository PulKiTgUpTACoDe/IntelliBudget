import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/data/categories";
import { AddTransactionForm } from "../_components/transaction-form";
import React from "react";
import { getTransaction } from "@/actions/transaction";

const AddTransaction = async ({ searchParams }) => {
  const accounts = await getUserAccounts();
  const editId = searchParams.edit;

  let initialData = null;
  if (editId) {
    initialData = await getTransaction(editId);
    if (!initialData) {
      return <div>Transaction not found</div>;
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <h1 className="text-5xl gradient-title mb-8">
        {editId ? "Update Transaction" : "Add Transaction"}
      </h1>

      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
};

export default AddTransaction;
