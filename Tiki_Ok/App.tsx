import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState('');
  const [totalPrice, setTotalPrice] = useState(0)
  const handleApplyDiscount = () => {
    // Xử lý áp dụng mã giảm giá
  };

  const handlePlaceOrder = () => {
    // Xử lý tiến hành đặt hàng
  };

  const handlePlus = ()=> {
    setQuantity(quantity + 1)
    setTotalPrice(totalPrice*quantity)
  }

  const handleMinus = ()=>{
    setQuantity(quantity > 1 ? quantity - 1 : 1)
    setTotalPrice(totalPrice - (totalPrice*quantity))
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Sản phẩm */}
      <View style={styles.layout1}>
        <View style={styles.productContainer}>

          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbpIzcbNgmoZOfkVJYnQ-3tdAEpUN1W1gDQ&s' }} // Thay bằng URL ảnh thật của sản phẩm
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.productSupplier}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.productPrice}>141.800 đ</Text>
            <Text style={styles.productOldPrice}>141.800 đ</Text>

            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => handleMinus()}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={() => handlePlus() }>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.laterButton}>Mua sau</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row', marginLeft: 35}}>
          <Text>Mã giảm giá đã lưu</Text>
          <Text style={styles.laterButton}>Xem tại đây</Text>
        </View>
        <View style={styles.discountContainer}>
        <TextInput
          style={styles.discountInput}
          placeholder="Mã giảm giá"
          value={discountCode}
          onChangeText={setDiscountCode}
        />
        <TouchableOpacity style={styles.applyButton} onPress={handleApplyDiscount}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>
      </View>

      

      <View style={styles.giftCardContainer}>
        <Text style={styles.giftCardText}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={styles.laterButton}>Nhập tại đây</Text>
      </View>

      <View style={[styles.row, styles.totalContainer, {marginBottom: 320}]}>
        <Text style={styles.subtotalLabel}>Tạm tính</Text>
        <Text style={styles.subtotalPrice}>{totalPrice} đ</Text>
      </View>

      <View style={styles.totalContainer}>

        <View style={styles.row}>
          <Text style={styles.totalLabel}>Thành tiền</Text>
          <Text style={styles.totalPrice}>{totalPrice} đ</Text>
        </View>

        <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
          <Text style={styles.placeOrderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: '#F5F5F5',
  },
  layout1: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSupplier: {
    color: '#000000',
    marginVertical: 5,
  },
  productPrice: {
    color: '#EE0D0D',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productOldPrice: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    backgroundColor: '#F0F0F0',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  laterButton: {
    color: '#134FEC',
    marginLeft: 20,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
    marginLeft: 20
  },
  discountInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  savedDiscountLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  viewHereText: {
    color: '#134FEC',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  applyButton: {
    backgroundColor: '#1976D2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#FFFFFF',
  },
  giftCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  giftCardText: {
    fontSize: 14,
  },
  totalContainer: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  subtotalLabel: {
    fontSize: 16,
  },
  subtotalPrice: {
    color: '#EE0D0D',
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#EE0D0D',
    fontSize: 24,
    fontWeight: 'bold',
  },
  placeOrderButton: {
    backgroundColor: '#EE0D0D',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  placeOrderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
