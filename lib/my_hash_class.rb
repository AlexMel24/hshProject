class MyHash
  MAX_PAIRS = 100
  MAX_ELEMENTS = 4

  attr_reader :my_new_hash, :out

  def initialize(hsh = nil, radomize = MAX_ELEMENTS, maxpairs = MAX_PAIRS)
    @randomize = radomize # defines how many pairs should be created for new hash (1 .. randomize)
    @max_pairs = maxpairs # used to set the max number of pairs in hash
    @current_pairs = 0
    @my_new_hash = hsh || create_hash

    @out = ''
    hash_out
  end


  private

  def hash_out(hsh = @my_new_hash, new_line = "")
    temphsh = hsh
    temphsh.each do |key, val|
      @out = @out + "\r\n" + new_line + key.to_s + "=>"
      if val.class != Hash
        if !val.nil?
          @out = @out + val.to_s
        else @out = @out + 'nil'
        end
      else
        hash_out(temphsh[key], new_line + "            ")
      end
    end
  end


  def create_hash(hsh = nil)
    if check_for_maxpairs
      new_hash = hsh || new_hash_element(rand(@randomize) + 1)

      new_hash.each do |key, val|
        unless val.is_a?(Hash)
          case val.to_i
            when 0
              new_hash[key] = nil
            when 1
              new_hash[key] = rand(10) + 1
            when 2
              if check_for_maxpairs
                new_hash[key] = {}
                new_hash[key] = new_hash_element(rand(@randomize) + 1)
                create_hash(new_hash[key])
              else
                new_hash[key] = rand(10)+1
              end
            else
              raise "Error!"
          end
          next
        end
      end
      new_hash
    end
  end

  def new_hash_element(count)
    i = 0
    if check_for_maxpairs
      temphsh = {}
      while i < count && check_for_maxpairs
        r = rand(3)
        name = create_name + i.to_s + r.to_s
        #name = 'var' + i.to_s + r.to_s
        temphsh[name] = r
        @current_pairs += 1
        i += 1
      end
      temphsh
    end
  end

  def check_for_maxpairs
    if @current_pairs < @max_pairs
      1
    else nil
    end
  end

  def create_name(n = 8)
    Array.new(n) { [*"A".."Z", *"0".."9", *"a".."z", "_"].sample }.join.to_s
  end

end

class MyCustomHash < MyHash
  attr_reader :ar
  def initialize(hsh = nil, radomize = MAX_ELEMENTS, maxpairs = MAX_PAIRS)
    super
    @ar = []

  end

  def get_values(hsh = @my_new_hash)
    temphash = hsh
    temphash.each do |key, val|
      if val.is_a?(Integer) || val.nil?
        twounitshash = {}
        twounitshash[key] = val
        @ar << twounitshash
      end

      if val.is_a?(Hash)
        get_values(temphash[key])
      end
    end
  end
end

class MyCustomArray < MyCustomHash
  attr_reader :ar
  def initialize(hsh = nil, radomize = MAX_ELEMENTS, maxpairs = MAX_PAIRS)
    super
    get_values
  end

  def delete_nil(array = @ar)
    @ar = array.select do |hsh|
      !hsh.values.first.nil?
    end
  end

  def get_max(array = @ar)
    ar = array
    if ar.size > 0
      max = ar.max { |hsh1, hsh2| hsh1.values.first <=> hsh2.values.first }.values.first
      ar.find_all do |hsh|
        hsh.values.first == max
      end
    else 'Empty array'
    end
  end

  def add(numb, array = @ar)
    array = array
    array.collect do |hsh|
      hsh[hsh.keys.first] += numb
    end
    @ar = array
  end

  def sort(array = @ar)
    array.sort_by! do |hsh|
      hsh.keys.first.capitalize
    end
    @ar = array
  end

  def sum(array = @ar)
    ar = array
    ar.sum do |hsh|
      hsh.values.first
    end
  end

end

